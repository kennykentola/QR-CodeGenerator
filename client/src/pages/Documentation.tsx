import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code, HelpCircle, Zap } from 'lucide-react';

export default function Documentation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-blue-100 text-lg">Learn how to use QR Code Generator</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="qr-types">QR Types</TabsTrigger>
            <TabsTrigger value="customization">Customization</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started" className="space-y-6 mt-6">
            <Card className="p-6">
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Go to the QR Generator page</li>
                    <li>Select your QR code type</li>
                    <li>Enter the required information</li>
                    <li>Customize colors and settings</li>
                    <li>Download your QR code</li>
                  </ol>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">No Registration Required</h3>
                  <p className="text-muted-foreground">
                    Our QR code generator is completely free and requires no account creation. All processing happens in your browser for maximum privacy.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="qr-types" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Supported QR Code Types</h3>
              <div className="grid grid-cols-2 gap-4">
                {['URL', 'Email', 'Phone', 'SMS', 'WhatsApp', 'WiFi', 'vCard', 'Business Card', 'Google Maps', 'Location', 'Event', 'Calendar', 'PayPal', 'UPI', 'Crypto', 'Social Media', 'Video Call', 'App Store', 'PDF', 'Custom'].map((type) => (
                  <div key={type} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="customization" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Customization Options</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>Colors:</strong> Change foreground and background colors</li>
                <li><strong>Size:</strong> Adjust QR code size from 100px to 1000px</li>
                <li><strong>Error Correction:</strong> Choose error correction level (L, M, Q, H)</li>
                <li><strong>Margin:</strong> Add margin around the QR code</li>
                <li><strong>Real-time Preview:</strong> See changes instantly as you customize</li>
              </ul>
            </Card>
          </TabsContent>

          <TabsContent value="export" className="space-y-6 mt-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Export Formats</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><strong>PNG:</strong> Standard format for web and print</li>
                <li><strong>JPEG:</strong> Compressed format for smaller file sizes</li>
                <li><strong>SVG:</strong> Vector format for scalable graphics</li>
                <li><strong>PDF:</strong> Professional format for printing</li>
              </ul>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
