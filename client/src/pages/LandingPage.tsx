import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLocation } from 'wouter';
import { QrCode, Zap, Shield, BarChart3, Download, Share2, Smartphone, Lock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

export default function LandingPage() {
  const [, setLocation] = useLocation();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: QrCode,
      title: '35+ QR Types',
      description: 'Generate QR codes for URLs, emails, WiFi, vCard, payments, social media, and more'
    },
    {
      icon: Sparkles,
      title: 'Advanced Customization',
      description: 'Full control over colors, styles, logo placement, and frame designs'
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Export as PNG, SVG, JPEG, PDF, or high-resolution for print'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See changes instantly as you customize your QR code'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Works perfectly on all devices with responsive design'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'All processing happens in your browser - no data stored'
    }
  ];

  const qrTypes = [
    'Website URL', 'Email', 'Phone', 'SMS', 'WhatsApp', 'WiFi',
    'vCard', 'Business Card', 'Google Maps', 'Location', 'Event',
    'PayPal', 'UPI', 'Crypto Wallet', 'Instagram', 'Facebook',
    'TikTok', 'LinkedIn', 'YouTube', 'Twitter/X', 'Telegram',
    'Discord', 'Zoom', 'Google Meet', 'Teams', 'App Store',
    'Google Play', 'PDF', 'Image', 'Video', 'Audio',
    'Menu', 'Coupon', 'Feedback Form', 'Survey', 'Custom Data'
  ];

  const faqItems = [
    {
      question: 'Is my data stored anywhere?',
      answer: 'No, all QR code generation happens entirely in your browser. We don\'t store or transmit any of your data to our servers. Your payment status is stored safely in your local browser storage.'
    },
    {
      question: 'Can I use these QR codes commercially?',
      answer: 'Yes, absolutely. You can use QR codes generated here for any purpose - personal, commercial, or otherwise. They never expire.'
    },
    {
      question: 'Is this completely free?',
      answer: 'Your first 3 QR code generations are 100% free. After that, we charge a tiny one-time fee of ₦1,000 for lifetime unlimited access to all features, including logo uploads. No monthly subscriptions.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed! Even when paying the one-time ₦1,000 fee, you just enter your email for the receipt. Your access is tied to your browser instantly.'
    },
    {
      question: 'Can I customize the appearance of QR codes?',
      answer: 'Yes, you can customize colors, sizes, error correction levels, margins, and upload your own logo to be centered on the QR code.'
    },
    {
      question: 'What\'s the maximum QR code size?',
      answer: 'You can generate QR codes up to 1000x1000 pixels. For print quality, we recommend downloading as PNG at the highest size setting.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <SEO 
        title="Create Professional Custom QR Codes" 
        description="Generate beautiful, customizable QR codes with logo support for free. 35+ QR types including WiFi, VCard, and Social Media links. No signup required."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "QR Code Generator",
          "applicationCategory": "Utility",
          "operatingSystem": "All",
          "offers": {
            "@type": "Offer",
            "price": "1000",
            "priceCurrency": "NGN"
          }
        }}
      />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">QR Generator</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/templates" className="text-sm text-muted-foreground hover:text-foreground transition">Templates</a>
            <a href="/documentation" className="text-sm text-muted-foreground hover:text-foreground transition">Docs</a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition">About</a>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
          </div>
          <Button onClick={() => setLocation('/generator')} className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-6">
              Professional QR Codes in Seconds
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Create beautiful, customizable QR codes with logo support. Your first 3 codes are 100% free — no registration required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setLocation('/generator')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Start Generating
              </Button>
              <Button
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 h-96 flex items-center justify-center border border-blue-200 dark:border-slate-600"
          >
            <div className="text-center">
              <QrCode className="w-24 h-24 text-blue-600 mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground">QR Code Preview</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional QR codes with advanced customization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QR Types Section */}
      <section id="types" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">35+ QR Code Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Support for every QR code type you could need
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {qrTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <p className="text-sm font-medium">{type}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">100% Private</h3>
                    <p className="text-muted-foreground">All processing happens in your browser. No data is sent to our servers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Lightning Fast</h3>
                    <p className="text-muted-foreground">Generate QR codes instantly with real-time preview updates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">No Registration</h3>
                    <p className="text-muted-foreground">Start generating QR codes immediately without creating an account.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fully Customizable</h3>
                    <p className="text-muted-foreground">Control every aspect of your QR code design and appearance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Download className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Multiple Formats</h3>
                    <p className="text-muted-foreground">Download in PNG, JPEG, SVG, PDF, or high-resolution formats.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BarChart3 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Professional Grade</h3>
                    <p className="text-muted-foreground">Create print-ready QR codes for professional use.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our QR code generator</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Your QR Code?</h2>
            <p className="text-blue-100 text-lg mb-8">Start generating professional QR codes in seconds</p>
            <Button
              size="lg"
              onClick={() => setLocation('/generator')}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">QR Generator</span>
              </div>
              <p className="text-sm text-slate-400">Professional QR code generation made simple.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/generator" className="hover:text-white transition">Generator</a></li>
                <li><a href="/scanner" className="hover:text-white transition">Scanner</a></li>
                <li><a href="/templates" className="hover:text-white transition">Templates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/documentation" className="hover:text-white transition">Documentation</a></li>
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/api-docs" className="hover:text-white transition">API</a></li>
                <li><a href="/about" className="hover:text-white transition">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 QR Code Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
