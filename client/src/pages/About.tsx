import { Card } from '@/components/ui/card';
import { Heart, Zap, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About QR Code Generator</h1>
          <p className="text-blue-100 text-lg">Our mission is to make QR code generation simple, fast, and accessible</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We believe that QR codes should be accessible to everyone. Our platform provides a free, 
              fast, and secure way to generate professional QR codes without any barriers to entry.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're a small business owner, marketer, or developer, our tool makes it easy to 
              create QR codes for any purpose.
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">User First</h3>
                <p className="text-muted-foreground">We prioritize user experience and make our tools intuitive and easy to use.</p>
              </Card>
              <Card className="p-6">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">Lightning-fast generation and real-time preview for the best experience.</p>
              </Card>
              <Card className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Privacy</h3>
                <p className="text-muted-foreground">All processing happens in your browser. We never store your data.</p>
              </Card>
              <Card className="p-6">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">Free to use, no registration required, accessible from anywhere.</p>
              </Card>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>35+ QR code types supported</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Advanced customization options</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Multiple export formats</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Real-time preview</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>100% free and no registration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Completely private - processing in browser</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
