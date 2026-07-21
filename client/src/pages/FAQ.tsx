import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { useI18n } from '@/i18nContext';

export default function FAQ() {
  const { t } = useI18n();
  const faqs = [
    {
      question: t('faq_page', 'q1'),
      answer: t('faq_page', 'a1')
    },
    {
      question: t('faq_page', 'q2'),
      answer: t('faq_page', 'a2')
    },
    {
      question: t('faq_page', 'q3'),
      answer: t('faq_page', 'a3')
    },
    {
      question: t('faq_page', 'q4'),
      answer: t('faq_page', 'a4')
    },
    {
      question: t('faq_page', 'q5'),
      answer: t('faq_page', 'a5')
    },
    {
      question: t('faq_page', 'q6'),
      answer: t('faq_page', 'a6')
    },
    {
      question: t('faq_page', 'q7'),
      answer: t('faq_page', 'a7')
    },
    {
      question: t('faq_page', 'q8'),
      answer: t('faq_page', 'a8')
    },
    {
      question: t('faq_page', 'q9'),
      answer: t('faq_page', 'a9')
    },
    {
      question: t('faq_page', 'q10'),
      answer: t('faq_page', 'a10')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('faq_page', 'title')}</h1>
          <p className="text-blue-100 text-lg">{t('faq_page', 'subtitle')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}
