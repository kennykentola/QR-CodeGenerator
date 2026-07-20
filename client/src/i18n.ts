// Built-in i18n — zero external dependencies
// Translations stored in locale files, managed via React context in i18nContext.tsx

export const translations: Record<string, Record<string, Record<string, string>>> = {
  en: {
    nav: {
      scanner: 'Scanner',
      templates: 'Templates',
      blog: 'Blog',
      docs: 'Docs',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    hero: {
      title: 'Professional QR Codes in Seconds',
      subtitle: 'Create beautiful, customizable QR codes with logo support. Your first 3 codes are 100% free — no registration required.',
      createBtn: 'Create QR Code',
      scanBtn: 'Scan QR Code',
    },
  },
  es: {
    nav: {
      scanner: 'Escáner',
      templates: 'Plantillas',
      blog: 'Blog',
      docs: 'Documentación',
      about: 'Acerca de',
      contact: 'Contacto',
      getStarted: 'Empezar',
    },
    hero: {
      title: 'Códigos QR profesionales en segundos',
      subtitle: 'Cree hermosos códigos QR personalizables con soporte de logotipo. Sus primeros 3 códigos son 100% gratuitos, sin registro.',
      createBtn: 'Crear Código QR',
      scanBtn: 'Escanear Código QR',
    },
  },
  fr: {
    nav: {
      scanner: 'Scanner',
      templates: 'Modèles',
      blog: 'Blog',
      docs: 'Documentation',
      about: 'À propos',
      contact: 'Contact',
      getStarted: 'Commencer',
    },
    hero: {
      title: 'Codes QR professionnels en quelques secondes',
      subtitle: 'Créez de superbes codes QR personnalisables avec prise en charge des logos. Vos 3 premiers codes sont 100 % gratuits, sans inscription.',
      createBtn: 'Créer un Code QR',
      scanBtn: 'Scanner un Code QR',
    },
  },
};

export function t(lang: string, section: string, key: string): string {
  return translations[lang]?.[section]?.[key] ?? translations['en'][section]?.[key] ?? key;
}
