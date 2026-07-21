import { Card } from '@/components/ui/card';
import { Heart, Zap, Shield, Globe } from 'lucide-react';
import { useI18n } from '@/i18nContext';

export default function About() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('about', 'title')}</h1>
          <p className="text-blue-100 text-lg">{t('about', 'subtitle')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t('about', 'mission')}</h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t('about', 'm1')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about', 'm2')}
            </p>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t('about', 'values')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('about', 'v1Title')}</h3>
                <p className="text-muted-foreground">{t('about', 'v1Desc')}</p>
              </Card>
              <Card className="p-6">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('about', 'v2Title')}</h3>
                <p className="text-muted-foreground">{t('about', 'v2Desc')}</p>
              </Card>
              <Card className="p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('about', 'v3Title')}</h3>
                <p className="text-muted-foreground">{t('about', 'v3Desc')}</p>
              </Card>
              <Card className="p-6">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{t('about', 'v4Title')}</h3>
                <p className="text-muted-foreground">{t('about', 'v4Desc')}</p>
              </Card>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t('about', 'why')}</h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w1')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w2')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w3')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w4')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w5')}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>{t('about', 'w6')}</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
