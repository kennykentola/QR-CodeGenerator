import { createContext, useContext, useState, ReactNode } from 'react';
import { t as translate, translations } from './i18n';

interface I18nContextType {
  lang: string;
  setLang: (lang: string) => void;
  t: (section: string, key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  setLang: () => {},
  t: (section, key) => translate('en', section, key),
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState('en');

  const tFn = (section: string, key: string) => translate(lang, section, key);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: tFn }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export const supportedLanguages = Object.keys(translations).map((code) => ({
  code,
  label: { en: 'English', es: 'Español', fr: 'Français' }[code] ?? code,
}));
