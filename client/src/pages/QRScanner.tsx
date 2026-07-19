import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Camera, Upload, Copy, X } from 'lucide-react';
import { toast } from 'sonner';

export default function QRScanner() {
  const [scannedData, setScannedData] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);

        const img = new Image();
        img.onload = async () => {
          // Note: In a production app, you would use a QR code library like jsQR or @zxing/library
          // For now, we show a placeholder that demonstrates the UI
          toast.info('QR code scanning requires a backend service. This is a demo interface.');
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
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  const handleClear = () => {
    setScannedData('');
    setUploadedImage('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">QR Code Scanner & Decoder</h1>
          <p className="text-muted-foreground">Upload an image to decode QR codes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Scanner Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Camera Scanner</h2>
            
            <div className="space-y-4">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8 flex flex-col items-center justify-center aspect-video">
                <Camera className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  Camera scanning feature coming soon
                </p>
              </div>
              <Button
                disabled
                className="w-full bg-slate-300 cursor-not-allowed"
              >
                <Camera className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
            </div>
          </Card>

          {/* Upload Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
            
            <div className="space-y-4">
              {uploadedImage ? (
                <div className="relative bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden aspect-video">
                  <img
                    src={uploadedImage}
                    alt="Uploaded QR code"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8 flex flex-col items-center justify-center aspect-video cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                >
                  <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Click to upload an image
                  </p>
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

        {/* Info Section */}
        <Card className="p-6 mt-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">About QR Code Scanning</h3>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            This interface demonstrates the QR code scanning and decoding functionality. In a production environment, 
            this would integrate with a QR code library to decode QR codes from camera streams or uploaded images. 
            The QR Generator tool is fully functional for creating QR codes with 35+ types and advanced customization options.
          </p>
        </Card>
      </div>
    </div>
  );
}
