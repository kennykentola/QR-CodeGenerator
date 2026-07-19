import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { QrCode, Smartphone, ShoppingCart, Wifi, MapPin, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Templates() {
  const [, setLocation] = useLocation();

  const templates = [
    {
      icon: Smartphone,
      title: 'Mobile App Download',
      description: 'Link to your app on App Store or Google Play',
      type: 'app_store'
    },
    {
      icon: Wifi,
      title: 'WiFi Network',
      description: 'Share WiFi credentials with guests',
      type: 'wifi'
    },
    {
      icon: ShoppingCart,
      title: 'Product Link',
      description: 'Direct customers to your product page',
      type: 'url'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Share your business location on Google Maps',
      type: 'google_maps'
    },
    {
      icon: Music,
      title: 'Social Media',
      description: 'Link to your social media profiles',
      type: 'instagram'
    },
    {
      icon: QrCode,
      title: 'Business Card',
      description: 'Digital business card with contact info',
      type: 'business_card'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">QR Code Templates</h1>
          <p className="text-blue-100 text-lg">Pre-configured templates for common use cases</p>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setLocation('/generator')}>
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{template.title}</h3>
                  <p className="text-muted-foreground mb-4">{template.description}</p>
                  <Button size="sm" variant="outline" className="w-full">Use Template</Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
