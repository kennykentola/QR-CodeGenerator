import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

import {
  generateQRCode,
  generateQRCodeWithLogo,
  generateQRCodeCanvas,
  generateQRCodeSVG,
  getQRTypes,
  getQRTypeConfig,
  QRType,
  QRGeneratorOptions,
} from '@/lib/qrService';
import {
  Download,
  Copy,
  RotateCcw,
  Share2,
  Loader2,
  Upload,
  Image as ImageIcon,
  Trash2,
  Lock,
  Zap,
} from 'lucide-react';
import { toast } from 'sonner';
import { useQRUsage } from '@/hooks/useQRUsage';
import PaywallModal from '@/components/PaywallModal';
import SEO from '@/components/SEO';

// ─── Form schema ─────────────────────────────────────────────────────────────

const QRGeneratorSchema = z
  .object({
    qrType: z.string().default('url'),
    foreground: z.string().default('#000000'),
    background: z.string().default('#FFFFFF'),
    size: z.number().min(100).max(1000).default(300),
    errorCorrection: z.enum(['L', 'M', 'Q', 'H']).default('H'),
    margin: z.number().min(0).max(10).default(1),
    dotStyle: z.string().default('square'),
    eyeStyle: z.string().default('square'),
    eyeColor: z.string().default('#000000'),
    transparentBackground: z.boolean().default(false),
  })
  .strict();

type QRGeneratorFormData = z.infer<typeof QRGeneratorSchema>;

// ─── Component ───────────────────────────────────────────────────────────────

export default function QRGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [typeFields, setTypeFields] = useState<Record<string, string>>({});
  const [logoSrc, setLogoSrc] = useState<string>('');
  const [logoUrl, setLogoUrl] = useState<string>('');
  const [logoRatio, setLogoRatio] = useState<number>(0.25);
  const [hasQR, setHasQR] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { isLimitReached, isPaid, remainingFree, recordUsage, markAsPaid } = useQRUsage();

  const form = useForm<QRGeneratorFormData>({
    resolver: zodResolver(QRGeneratorSchema) as any,
    defaultValues: {
      qrType: 'url',
      foreground: '#000000',
      background: '#FFFFFF',
      size: 300,
      errorCorrection: 'H',
      margin: 1,
      dotStyle: 'square',
      eyeStyle: 'square',
      eyeColor: '#000000',
      transparentBackground: false,
    },
  });

  const currentQRType = form.watch('qrType') as QRType;
  const currentConfig = getQRTypeConfig(currentQRType);

  // ── QR generation ──────────────────────────────────────────────────────────

  const generateQR = useCallback(async () => {
    const data = currentConfig.generateData(typeFields);
    if (!data || !canvasRef.current) return;

    try {
      setIsGenerating(true);
      const canvas = canvasRef.current;
      const opts: Partial<QRGeneratorOptions> = {
        foreground: form.getValues('foreground'),
        background: form.getValues('background'),
        size: form.getValues('size'),
        errorCorrectionLevel: form.getValues('errorCorrection'),
        margin: form.getValues('margin'),
      };

      const activeLogo = logoSrc || logoUrl;
      if (activeLogo) {
        await generateQRCodeWithLogo(canvas, data, opts, activeLogo, logoRatio);
      } else {
        await generateQRCodeCanvas(canvas, data, opts);
      }
      setHasQR(true);
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast.error('Failed to generate QR code');
    } finally {
      setIsGenerating(false);
    }
  }, [typeFields, currentConfig, form, logoSrc, logoUrl, logoRatio]);

  useEffect(() => {
    generateQR();
  }, [generateQR]);

  // ── Field change ───────────────────────────────────────────────────────────

  const handleFieldChange = (fieldName: string, value: string) => {
    setTypeFields((prev) => ({ ...prev, [fieldName]: value }));
  };

  // ── Logo file upload ───────────────────────────────────────────────────────

  const handleLogoFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogoSrc(e.target?.result as string);
      setLogoUrl('');
    };
    reader.readAsDataURL(file);
  };

  const handleLogoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleLogoFile(file);
  };

  const clearLogo = () => {
    setLogoSrc('');
    setLogoUrl('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // ── Download ───────────────────────────────────────────────────────────────

  const handleDownload = async (format: 'png' | 'jpeg' | 'svg') => {
    if (isLimitReached) {
      setShowPaywall(true);
      return;
    }
    if (!hasQR || !canvasRef.current) {
      toast.error('Please generate a QR code first');
      return;
    }
    
    try {
      let url = '';
      if (format === 'svg') {
        const data = currentConfig.generateData(typeFields);
        const opts: Partial<QRGeneratorOptions> = {
          foreground: form.getValues('foreground'),
          background: form.getValues('background'),
          size: form.getValues('size'),
          errorCorrectionLevel: form.getValues('errorCorrection'),
          margin: form.getValues('margin'),
        };
        const activeLogo = logoSrc || logoUrl;
        
        const svgString = await generateQRCodeSVG(data, opts, activeLogo, logoRatio);
        const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        url = URL.createObjectURL(blob);
      } else {
        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        url = canvasRef.current.toDataURL(mimeType, 0.95);
      }

      const link = document.createElement('a');
      link.href = url;
      link.download = `qr-code.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      if (format === 'svg') {
        URL.revokeObjectURL(url);
      }

      recordUsage();
      toast.success(`Downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error generating download:', error);
      toast.error('Failed to download file');
    }
  };

  // ── Copy ───────────────────────────────────────────────────────────────────

  const handleCopy = async () => {
    if (isLimitReached) {
      setShowPaywall(true);
      return;
    }
    if (!hasQR || !canvasRef.current) {
      toast.error('Please generate a QR code first');
      return;
    }
    canvasRef.current.toBlob(async (blob) => {
      if (!blob) return;
      try {
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
        recordUsage();
        toast.success('QR code copied to clipboard');
      } catch {
        toast.error('Failed to copy — try downloading instead');
      }
    });
  };

  // ── Share ──────────────────────────────────────────────────────────────────

  const handleShare = async () => {
    if (isLimitReached) {
      setShowPaywall(true);
      return;
    }
    if (!hasQR || !canvasRef.current) {
      toast.error('Please generate a QR code first');
      return;
    }
    canvasRef.current.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], 'qr-code.png', { type: 'image/png' });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'QR Code' });
        recordUsage();
      } else {
        toast.error('Share not supported on this device');
      }
    });
  };

  // ── Reset ──────────────────────────────────────────────────────────────────

  const handleReset = () => {
    form.reset();
    setTypeFields({});
    clearLogo();
    setHasQR(false);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
    toast.success('Settings reset');
  };

  const qrTypes = getQRTypes();
  const activeLogo = logoSrc || logoUrl;

  // ─── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8 px-4">
      <SEO 
        title="Custom QR Code Maker" 
        description="Design and download high-resolution QR codes with custom colors, shapes, and logo overlays."
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-1">QR Code Generator</h1>
            <p className="text-muted-foreground">
              Create professional QR codes instantly with advanced customization
            </p>
          </div>

          {/* Usage badge */}
          <div className="flex-shrink-0">
            {isPaid ? (
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" /> Unlimited Access
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
                <Lock className="w-4 h-4" />
                {remainingFree} free{' '}
                {remainingFree === 1 ? 'generation' : 'generations'} left
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ── Left Column ─────────────────────────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">
            {/* QR Type */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">QR Type</h2>
              <Select
                value={currentQRType}
                onValueChange={(value) => {
                  form.setValue('qrType', value);
                  setTypeFields({});
                }}
              >
                <SelectTrigger id="qr-type-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {qrTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-2">{currentConfig.description}</p>
            </Card>

            {/* Content Fields */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Content</h2>
              <div className="space-y-4">
                {currentConfig.fields.map((field) => (
                  <div key={field.name}>
                    <Label htmlFor={`field-${field.name}`}>{field.label}</Label>
                    {field.type === 'select' ? (
                      <Select
                        value={typeFields[field.name] || ''}
                        onValueChange={(value) => handleFieldChange(field.name, value)}
                      >
                        <SelectTrigger id={`field-${field.name}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        id={`field-${field.name}`}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={typeFields[field.name] || ''}
                        onChange={(e) => handleFieldChange(field.name, e.target.value)}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Customization */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Customization</h2>
              <Tabs defaultValue="colors" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="colors">Colors</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                  <TabsTrigger value="size">Size</TabsTrigger>
                  <TabsTrigger value="logo">Logo</TabsTrigger>
                </TabsList>

                {/* Colors */}
                <TabsContent value="colors" className="space-y-4 mt-4">
                  <div>
                    <Label>Foreground Color</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        type="color"
                        value={form.watch('foreground')}
                        onChange={(e) => form.setValue('foreground', e.target.value)}
                        className="w-12 h-10 p-1 cursor-pointer"
                        id="fg-color"
                      />
                      <Input
                        type="text"
                        value={form.watch('foreground')}
                        onChange={(e) => form.setValue('foreground', e.target.value)}
                        placeholder="#000000"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Background Color</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        type="color"
                        value={form.watch('background')}
                        onChange={(e) => form.setValue('background', e.target.value)}
                        className="w-12 h-10 p-1 cursor-pointer"
                        id="bg-color"
                      />
                      <Input
                        type="text"
                        value={form.watch('background')}
                        onChange={(e) => form.setValue('background', e.target.value)}
                        placeholder="#FFFFFF"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Style */}
                <TabsContent value="style" className="space-y-4 mt-4">
                  <div>
                    <Label>Error Correction Level</Label>
                    <Select
                      value={form.watch('errorCorrection')}
                      onValueChange={(value) => form.setValue('errorCorrection', value as 'L' | 'M' | 'Q' | 'H')}
                    >
                      <SelectTrigger id="error-correction">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">Low (7%) — smaller QR</SelectItem>
                        <SelectItem value="M">Medium (15%)</SelectItem>
                        <SelectItem value="Q">Quartile (25%)</SelectItem>
                        <SelectItem value="H">High (30%) — best with logo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Margin — {form.watch('margin') || 1} modules</Label>
                    <Slider
                      className="mt-2"
                      value={[form.watch('margin') || 1]}
                      onValueChange={(value) => form.setValue('margin', value[0])}
                      min={0}
                      max={10}
                      step={1}
                    />
                  </div>
                </TabsContent>

                {/* Size */}
                <TabsContent value="size" className="space-y-4 mt-4">
                  <div>
                    <Label>Size — {form.watch('size') || 300}px</Label>
                    <Slider
                      className="mt-2"
                      value={[form.watch('size') || 300]}
                      onValueChange={(value) => form.setValue('size', value[0])}
                      min={100}
                      max={1000}
                      step={50}
                    />
                  </div>
                </TabsContent>

                {/* Logo */}
                <TabsContent value="logo" className="space-y-4 mt-4">
                  {/* Drop zone */}
                  <div
                    className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-5 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleLogoDrop}
                    onClick={() => fileInputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    aria-label="Upload logo"
                  >
                    {activeLogo ? (
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={activeLogo}
                          alt="Logo preview"
                          className="w-16 h-16 object-contain rounded-lg border"
                        />
                        <p className="text-xs text-green-600 font-medium">Logo loaded ✓</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Upload className="w-8 h-8" />
                        <p className="text-sm font-medium">Drop your logo here</p>
                        <p className="text-xs">PNG, JPG, SVG supported</p>
                      </div>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleLogoFile(file);
                    }}
                  />

                  {/* URL input */}
                  <div>
                    <Label htmlFor="logo-url">Or paste a logo URL</Label>
                    <div className="flex gap-2 mt-1">
                      <Input
                        id="logo-url"
                        type="url"
                        placeholder="https://example.com/logo.png"
                        value={logoUrl}
                        onChange={(e) => {
                          setLogoUrl(e.target.value);
                          setLogoSrc('');
                        }}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={clearLogo}
                        title="Remove logo"
                        disabled={!activeLogo}
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </Button>
                    </div>
                  </div>

                  {/* Logo size */}
                  {activeLogo && (
                    <div>
                      <Label>Logo size — {Math.round(logoRatio * 100)}% of QR</Label>
                      <Slider
                        className="mt-2"
                        value={[logoRatio * 100]}
                        onValueChange={(v) => setLogoRatio(v[0] / 100)}
                        min={10}
                        max={35}
                        step={1}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Keep under 30% for best scannability. Error correction is automatically set to High.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* ── Right Column ────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview */}
            <Card className="p-8 flex flex-col items-center justify-center min-h-96 bg-white dark:bg-slate-900 relative overflow-hidden" aria-live="polite">
              {/* Screen reader announcement for generation status */}
              <span className="sr-only">
                {isGenerating ? 'Generating QR code...' : hasQR ? 'QR code generated and ready to download' : 'Waiting for input to generate QR code'}
              </span>
              
              {isGenerating && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 rounded-xl z-10" aria-hidden="true">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-2" />
                  <p className="text-muted-foreground text-sm">Generating...</p>
                </div>
              )}
              {isLimitReached && !isPaid && hasQR && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-md rounded-xl z-10 p-6 text-center text-white">
                  <div className="bg-slate-900/80 p-4 rounded-full mb-4">
                    <Lock className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Limit Reached</h3>
                  <p className="text-sm text-slate-200 mb-4">Pay ₦1,000 to unlock this QR code and unlimited generations.</p>
                  <Button onClick={() => setShowPaywall(true)} className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold" aria-label="Unlock unlimited access for 1000 Naira">
                    Unlock Now
                  </Button>
                </div>
              )}
              <canvas
                ref={canvasRef}
                className={`max-w-full h-auto rounded-lg ${!hasQR ? 'hidden' : ''} ${isLimitReached && !isPaid ? 'blur-md grayscale opacity-50' : ''}`}
                style={{ imageRendering: 'pixelated' }}
                aria-label="Generated QR Code"
                role="img"
              />
              {!hasQR && !isGenerating && (
                <div className="flex flex-col items-center gap-3 text-muted-foreground" aria-hidden="true">
                  <ImageIcon className="w-16 h-16 opacity-20" />
                  <p className="text-sm">Fill in the content to generate your QR code</p>
                </div>
              )}
            </Card>

            {/* Generate button (shown when limit not exceeded or when not auto-generating) */}
            {isLimitReached && !isPaid ? (
              <Button
                id="unlock-btn"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-base font-semibold"
                onClick={() => setShowPaywall(true)}
              >
                <Lock className="w-4 h-4 mr-2" />
                Unlock Unlimited — Pay ₦1,000
              </Button>
            ) : null}

            {/* Action buttons */}
            {hasQR && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  id="copy-btn"
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button
                  id="share-btn"
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="flex items-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button
                  id="download-png-btn"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('png')}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  PNG
                </Button>
                <Button
                  id="download-svg-btn"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('svg')}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  SVG
                </Button>
                <Button
                  id="download-jpeg-btn"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('jpeg')}
                  className="flex items-center gap-2 hidden md:flex"
                >
                  <Download className="w-4 h-4" />
                  JPEG
                </Button>
              </div>
            )}

            {/* Reset */}
            <Button
              id="reset-btn"
              variant="secondary"
              onClick={handleReset}
              className="w-full flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All
            </Button>

            {/* Free usage indicator */}
            {!isPaid && (
              <p className="text-center text-xs text-muted-foreground">
                {remainingFree > 0
                  ? `${remainingFree} of 3 free generations remaining — pay ₦1,000 for unlimited access`
                  : 'Free limit reached — pay ₦1,000 to unlock unlimited QR codes'}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onSuccess={(ref) => {
          markAsPaid(ref);
          setShowPaywall(false);
        }}
      />
    </div>
  );
}
