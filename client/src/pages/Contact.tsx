import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useI18n } from '@/i18nContext';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('contact', 'success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('contact', 'title')}</h1>
          <p className="text-blue-100 text-lg">{t('contact', 'subtitle')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact', 'get_in_touch')}</h2>
              <p className="text-muted-foreground mb-8">
                {t('contact', 'desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'email')}</h3>
                  <a href="mailto:peterkehindeademola9@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">
                    peterkehindeademola9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'phone')}</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+2348163571677" className="hover:text-blue-600 transition-colors block">(+234) 08163571677</a>
                    <a href="tel:+2349048082076" className="hover:text-blue-600 transition-colors block">(+234) 09048082076</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'address')}</h3>
                  <p className="text-muted-foreground">House 25, Unit 1 Road Elebu,<br />Moniya, Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t('contact', 'form_name')}</Label>
                <Input
                  id="name"
                  placeholder={t('contact', 'form_name_ph')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">{t('contact', 'form_email')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact', 'form_email_ph')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">{t('contact', 'form_subject')}</Label>
                <Input
                  id="subject"
                  placeholder={t('contact', 'form_subject_ph')}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">{t('contact', 'form_message')}</Label>
                <Textarea
                  id="message"
                  placeholder={t('contact', 'form_message_ph')}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {t('contact', 'send')}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
