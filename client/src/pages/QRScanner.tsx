import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Camera, Upload, Copy, X, QrCode, CameraOff, ZapOff } from 'lucide-react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import jsQR from 'jsqr';

type ScanMode = 'idle' | 'camera' | 'upload';

export default function QRScanner() {
  const [scannedData, setScannedData] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [scanMode, setScanMode] = useState<ScanMode>('idle');
  const [cameraError, setCameraError] = useState<string>('');
  const [isScanning, setIsScanning] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number>(0);

  // ── Camera scanning ─────────────────────────────────────────────────────────

  const startCamera = async () => {
    setCameraError('');
    setScannedData('');
    setScanMode('camera');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsScanning(true);
      scanFrame();
    } catch (err: any) {
      const msg = err?.name === 'NotAllowedError'
        ? 'Camera permission denied. Please allow camera access in your browser settings.'
        : 'Could not access camera. Please ensure a camera is connected.';
      setCameraError(msg);
      setScanMode('idle');
      toast.error(msg);
    }
  };

  const scanFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      rafRef.current = requestAnimationFrame(scanFrame);
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert',
    });
    if (code) {
      setScannedData(code.data);
      toast.success('QR code detected!');
      stopCamera();
      return;
    }
    rafRef.current = requestAnimationFrame(scanFrame);
  };

  const stopCamera = () => {
    cancelAnimationFrame(rafRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
    setScanMode('idle');
  };

  // ── Image upload scanning ────────────────────────────────────────────────────

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setScanMode('upload');
    setScannedData('');

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);

        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          if (!context) return;
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0, img.width, img.height);

          try {
            const imageData = context.getImageData(0, 0, img.width, img.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
              inversionAttempts: 'dontInvert',
            });
            if (code) {
              setScannedData(code.data);
              toast.success('QR code successfully decoded!');
            } else {
              toast.error('No QR code found. Please try a clearer image.');
            }
          } catch (err) {
            console.error('Error decoding image:', err);
            toast.error('Failed to analyze image');
          }
        };
        img.src = imageUrl;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error processing image:', error);
      toast.error('Failed to process image');
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(scannedData);
      toast.success('Copied to clipboard');
    } catch {
      toast.error('Failed to copy');
    }
  };

  const handleClear = () => {
    stopCamera();
    setScannedData('');
    setUploadedImage('');
    setScanMode('idle');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8 px-4">
      <SEO
        title="QR Code Scanner & Decoder"
        description="Free online QR code scanner. Scan QR codes live with your camera or upload an image to decode instantly — no app needed."
      />
      {/* Hidden canvas used for frame-by-frame camera analysis */}
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">QR Code Scanner & Decoder</h1>
          <p className="text-muted-foreground">Scan with your camera or upload an image — results appear instantly</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ── Camera Scanner ────────────────────────────────────────────── */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              Live Camera Scanner
            </h2>

            <div className="space-y-4">
              {/* Video viewfinder */}
              <div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                <video
                  ref={videoRef}
                  muted
                  playsInline
                  className={`w-full h-full object-cover ${scanMode === 'camera' ? 'block' : 'hidden'}`}
                />
                {scanMode !== 'camera' && (
                  <div className="flex flex-col items-center gap-3 text-slate-400">
                    {cameraError ? (
                      <>
                        <CameraOff className="w-10 h-10" />
                        <p className="text-xs text-center px-4">{cameraError}</p>
                      </>
                    ) : (
                      <>
                        <Camera className="w-10 h-10 opacity-40" />
                        <p className="text-sm opacity-60">Camera preview will appear here</p>
                      </>
                    )}
                  </div>
                )}
                {/* Scanning overlay with animated border */}
                {isScanning && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-4 border-2 border-blue-400 rounded-lg animate-pulse opacity-70" />
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Scanning…
                    </div>
                  </div>
                )}
              </div>

              {isScanning ? (
                <Button onClick={stopCamera} variant="destructive" className="w-full">
                  <ZapOff className="w-4 h-4 mr-2" />
                  Stop Camera
                </Button>
              ) : (
                <Button
                  id="start-camera-btn"
                  onClick={startCamera}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Start Camera
                </Button>
              )}
            </div>
          </Card>

          {/* ── Image Upload ──────────────────────────────────────────────── */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Upload Image
            </h2>

            <div className="space-y-4">
              {uploadedImage ? (
                <div className="relative bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden aspect-video">
                  <img
                    src={uploadedImage}
                    alt="Uploaded QR code"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => { setUploadedImage(''); setScannedData(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                    className="absolute top-2 right-2 bg-slate-900/70 text-white rounded-full p-1 hover:bg-slate-900 transition"
                    aria-label="Remove image"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8 flex flex-col items-center justify-center aspect-video cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-blue-400 transition-colors"
                >
                  <Upload className="w-12 h-12 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground text-sm font-medium">Click to upload an image</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP supported</p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <Button
                id="upload-image-btn"
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full"
              >
                <Upload className="w-4 h-4 mr-2" />
                Choose Image
              </Button>
            </div>
          </Card>
        </div>

        {/* ── Decoded Result ───────────────────────────────────────────────── */}
        {scannedData && (
          <Card className="mt-6 p-6 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <div className="flex items-center gap-2 text-green-800 dark:text-green-400 font-semibold mb-3">
              <QrCode className="w-5 h-5" />
              Decoded Content
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-sm break-all max-h-48 overflow-y-auto mb-4">
              {scannedData}
            </div>
            {/* If the result looks like a URL, provide an open link button */}
            {(scannedData.startsWith('http://') || scannedData.startsWith('https://')) && (
              <a
                href={scannedData}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline mb-3"
              >
                Open link ↗
              </a>
            )}
            <div className="flex gap-3">
              <Button onClick={handleCopy} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                <Copy className="w-4 h-4 mr-2" />
                Copy Result
              </Button>
              <Button onClick={handleClear} variant="outline">
                <X className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>
          </Card>
        )}

        {/* Info Section */}
        <Card className="p-6 mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">100% Private Scanning</h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            All scanning happens directly in your browser. Your camera feed and uploaded images are never sent to any server.
            For best results when uploading, ensure the QR code is clear, well-lit, and fills a good portion of the image.
          </p>
        </Card>
      </div>
    </div>
  );
}
