import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { QrCode, Smartphone, ShoppingCart, Wifi, MapPin, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18nContext';

export default function Templates() {
  const [, setLocation] = useLocation();
  const { t } = useI18n();

  const templates = [
    {
      icon: Smartphone,
      titleKey: 'tpl_mobile_title',
      descKey: 'tpl_mobile_desc',
      type: 'app_store'
    },
    {
      icon: Wifi,
      titleKey: 'tpl_wifi_title',
      descKey: 'tpl_wifi_desc',
      type: 'wifi'
    },
    {
      icon: ShoppingCart,
      titleKey: 'tpl_product_title',
      descKey: 'tpl_product_desc',
      type: 'url'
    },
    {
      icon: MapPin,
      titleKey: 'tpl_location_title',
      descKey: 'tpl_location_desc',
      type: 'google_maps'
    },
    {
      icon: Music,
      titleKey: 'tpl_social_title',
      descKey: 'tpl_social_desc',
      type: 'instagram'
    },
    {
      icon: QrCode,
      titleKey: 'tpl_biz_title',
      descKey: 'tpl_biz_desc',
      type: 'business_card'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('templates', 'title')}</h1>
          <p className="text-blue-100 text-lg">{t('templates', 'subtitle')}</p>
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
                  <h3 className="text-lg font-semibold mb-2">{t('templates', template.titleKey)}</h3>
                  <p className="text-muted-foreground mb-4">{t('templates', template.descKey)}</p>
                  <Button size="sm" variant="outline" className="w-full">{t('templates', 'use_template')}</Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
