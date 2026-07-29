import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18nContext';
import { useState } from 'react';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

// ─── Formspree endpoint ──────────────────────────────────────────────────────
// Sign up FREE at https://formspree.io → create a form → replace the ID below
// with your own form ID (e.g. "xpwzdkae").  Emails will go to the address you
// set as the form's "email" in the Formspree dashboard.
//
// For now we use a placeholder that you MUST replace with your real form ID.
// If you haven't signed up yet, use this form template:
//   https://formspree.io/f/YOUR_FORM_ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwzdkae';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[QR Generator] ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Message sent! We will reply to your email within 24 hours.');
      } else {
        const data = await response.json();
        const errorMsg =
          data?.errors?.[0]?.message ||
          'Failed to send message. Please email us directly at peterkehindeademola9@gmail.com';
        toast.error(errorMsg);
      }
    } catch {
      toast.error(
        'Network error. Please check your connection or email us at peterkehindeademola9@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <SEO
        title="Contact Us — KennyKentola QR Generator"
        description="Get in touch with the KennyKentola Digital team. We respond within 24 hours."
      />
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
              <p className="text-muted-foreground mb-8">{t('contact', 'desc')}</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'email')}</h3>
                  <a
                    href="mailto:peterkehindeademola9@gmail.com"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    peterkehindeademola9@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'phone')}</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+2348163571677" className="hover:text-blue-600 transition-colors block">
                      (+234) 08163571677
                    </a>
                    <a href="tel:+2349048082076" className="hover:text-blue-600 transition-colors block">
                      (+234) 09048082076
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact', 'address')}</h3>
                  <p className="text-muted-foreground">
                    House 25, Unit 1 Road Elebu,
                    <br />
                    Moniya, Ibadan, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground max-w-xs">
                  Thank you for reaching out. We'll reply to{' '}
                  <span className="font-medium text-foreground">{formData.email || 'your email'}</span>{' '}
                  within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="contact-name">{t('contact', 'form_name')}</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder={t('contact', 'form_name_ph')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email">{t('contact', 'form_email')}</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder={t('contact', 'form_email_ph')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="contact-subject">{t('contact', 'form_subject')}</Label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    placeholder={t('contact', 'form_subject_ph')}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">{t('contact', 'form_message')}</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder={t('contact', 'form_message_ph')}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    t('contact', 'send')
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Your message goes directly to{' '}
                  <span className="font-medium">peterkehindeademola9@gmail.com</span>
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
