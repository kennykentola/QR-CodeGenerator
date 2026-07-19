import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

export default function FAQ() {
  const faqs = [
    {
      question: 'Is QR Code Generator free to use?',
      answer: 'Yes, QR Code Generator is completely free. There are no hidden charges, subscriptions, or premium features. You can generate unlimited QR codes without any cost.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No, you do not need to create an account. Our QR code generator is completely anonymous and requires no registration. Start generating QR codes immediately.'
    },
    {
      question: 'Is my data stored on your servers?',
      answer: 'No, all QR code generation happens entirely in your browser. We do not store any of your data on our servers. Your privacy is completely protected.'
    },
    {
      question: 'What QR code types are supported?',
      answer: 'We support 35+ QR code types including URLs, emails, phone numbers, WiFi networks, vCards, business cards, social media profiles, payment links, and much more.'
    },
    {
      question: 'Can I customize the appearance of QR codes?',
      answer: 'Yes, you can customize colors, size, error correction level, margin, and more. You can also add logos and frames to your QR codes.'
    },
    {
      question: 'What formats can I download QR codes in?',
      answer: 'You can download QR codes as PNG, JPEG, SVG, and PDF. We also offer high-resolution and print-quality export options.'
    },
    {
      question: 'Can I use these QR codes commercially?',
      answer: 'Yes, absolutely. You can use QR codes generated here for any purpose - personal, commercial, or otherwise. There are no restrictions.'
    },
    {
      question: 'How do I scan a QR code?',
      answer: 'Most modern smartphones have built-in QR code scanning. Simply open your camera app and point it at the QR code. For other devices, you can use our QR Scanner tool.'
    },
    {
      question: 'What is error correction level?',
      answer: 'Error correction level determines how much of the QR code can be damaged while still being scannable. Higher levels allow more damage but require larger QR codes.'
    },
    {
      question: 'Can I edit a QR code after generating it?',
      answer: 'You can regenerate a QR code with different settings, but QR codes are static once created. To change the content, generate a new QR code.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg">Find answers to common questions about QR Code Generator</p>
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
