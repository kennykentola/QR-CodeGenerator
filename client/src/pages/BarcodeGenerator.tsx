import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Download, Copy, RotateCcw, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import JsBarcode from 'jsbarcode';

type BarcodeFormat = 'CODE128' | 'CODE39' | 'EAN13' | 'EAN8' | 'UPC' | 'ITF14';

export default function BarcodeGenerator() {
  const [barcodeDataUrl, setBarcodeDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const barcodeRef = useRef<SVGSVGElement>(null);

  const form = useForm({
    defaultValues: {
      value: '',
      format: 'CODE128' as BarcodeFormat,
      width: 2,
      height: 100,
      fontSize: 14,
      margin: 10,
    }
  });

  const generateBarcode = async () => {
    const value = form.getValues('value');
    if (!value) {
      toast.error('Please enter a value');
      return;
    }

    try {
      setIsGenerating(true);
      
      if (barcodeRef.current) {
        JsBarcode(barcodeRef.current, value, {
          format: form.getValues('format'),
          width: form.getValues('width'),
          height: form.getValues('height'),
          fontSize: form.getValues('fontSize'),
          margin: form.getValues('margin'),
          displayValue: true,
        });

        // Convert SVG to data URL
        const svgString = new XMLSerializer().serializeToString(barcodeRef.current);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          setBarcodeDataUrl(canvas.toDataURL('image/png'));
          toast.success('Barcode generated successfully');
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
      }
    } catch (error) {
      console.error('Error generating barcode:', error);
      toast.error('Failed to generate barcode');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = async (format: 'png' | 'svg') => {
    if (!barcodeDataUrl) {
      toast.error('Please generate a barcode first');
      return;
    }

    try {
      const link = document.createElement('a');
      link.href = barcodeDataUrl;
      link.download = `barcode.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success(`Barcode downloaded as ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error downloading barcode:', error);
      toast.error('Failed to download barcode');
    }
  };

  const handleCopy = async () => {
    if (!barcodeDataUrl) {
      toast.error('Please generate a barcode first');
      return;
    }

    try {
      const blob = await (await fetch(barcodeDataUrl)).blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      toast.success('Barcode copied to clipboard');
    } catch (error) {
      console.error('Error copying barcode:', error);
      toast.error('Failed to copy barcode');
    }
  };

  const handleReset = () => {
    form.reset();
    setBarcodeDataUrl('');
    toast.success('Settings reset');
  };

  useEffect(() => {
    if (form.getValues('value')) {
      generateBarcode();
    }
  }, [form.watch('format'), form.watch('width'), form.watch('height'), form.watch('fontSize'), form.watch('margin')]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Barcode Generator</h1>
          <p className="text-muted-foreground">Create professional barcodes in multiple formats</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form & Controls */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Barcode Value</h2>
              <div>
                <Label htmlFor="value">Value</Label>
                <Input
                  id="value"
                  placeholder="Enter barcode value"
                  {...form.register('value')}
                  onChange={(e) => {
                    form.setValue('value', e.target.value);
                  }}
                />
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Settings</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="format">Format</Label>
                  <Select value={form.watch('format')} onValueChange={(value) => form.setValue('format', value as BarcodeFormat)}>
                    <SelectTrigger id="format">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CODE128">CODE128</SelectItem>
                      <SelectItem value="CODE39">CODE39</SelectItem>
                      <SelectItem value="EAN13">EAN13</SelectItem>
                      <SelectItem value="EAN8">EAN8</SelectItem>
                      <SelectItem value="UPC">UPC</SelectItem>
                      <SelectItem value="ITF14">ITF14</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Width</Label>
                  <div className="flex gap-2 mt-2">
                    <Slider
                      value={[form.watch('width')]}
                      onValueChange={(value) => form.setValue('width', value[0])}
                      min={1}
                      max={5}
                      step={0.5}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-8">{form.watch('width')}</span>
                  </div>
                </div>

                <div>
                  <Label>Height (px)</Label>
                  <div className="flex gap-2 mt-2">
                    <Slider
                      value={[form.watch('height')]}
                      onValueChange={(value) => form.setValue('height', value[0])}
                      min={50}
                      max={300}
                      step={10}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-12">{form.watch('height')}</span>
                  </div>
                </div>

                <div>
                  <Label>Font Size (px)</Label>
                  <div className="flex gap-2 mt-2">
                    <Slider
                      value={[form.watch('fontSize')]}
                      onValueChange={(value) => form.setValue('fontSize', value[0])}
                      min={8}
                      max={24}
                      step={1}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-8">{form.watch('fontSize')}</span>
                  </div>
                </div>

                <div>
                  <Label>Margin (px)</Label>
                  <div className="flex gap-2 mt-2">
                    <Slider
                      value={[form.watch('margin')]}
                      onValueChange={(value) => form.setValue('margin', value[0])}
                      min={0}
                      max={30}
                      step={5}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium w-8">{form.watch('margin')}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Preview & Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Preview */}
            <Card className="p-8 flex items-center justify-center min-h-96 bg-white dark:bg-slate-900">
              <div className="flex items-center justify-center">
                {isGenerating ? (
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    <p className="text-muted-foreground">Generating barcode...</p>
                  </div>
                ) : barcodeDataUrl ? (
                  <img src={barcodeDataUrl} alt="Barcode" className="max-w-full h-auto" />
                ) : (
                  <p className="text-muted-foreground">Enter a value to generate barcode</p>
                )}
              </div>
            </Card>

            {/* Hidden SVG for barcode generation */}
            <svg ref={barcodeRef} style={{ display: 'none' }} />

            {/* Action Buttons */}
            {barcodeDataUrl && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('png')}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  PNG
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('svg')}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  SVG
                </Button>
              </div>
            )}

            {/* Reset Button */}
            <Button
              variant="secondary"
              onClick={handleReset}
              className="w-full flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
