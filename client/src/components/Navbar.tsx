import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { QrCode, Home, Smartphone, Menu, X, Globe, ArrowLeft } from 'lucide-react';
import { useI18n, supportedLanguages } from '@/i18nContext';
import { usePwa } from '@/contexts/PwaContext';

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  const { isInstallable, promptInstall } = usePwa();

  const isHome = location === '/';

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Brand Logo & Name - Always routes back to Home (/) */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation('/')}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground text-sm font-medium px-2 py-1"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          )}

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/');
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            title="Go to Home Page"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight group-hover:text-blue-600 transition-colors">
              QR Generator
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); setLocation('/'); }}
            className={`text-sm font-medium transition ${location === '/' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {t('nav', 'home') || 'Home'}
          </a>
          <a
            href="/generator"
            onClick={(e) => { e.preventDefault(); setLocation('/generator'); }}
            className={`text-sm font-medium transition ${location === '/generator' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Generator
          </a>
          <a
            href="/scanner"
            onClick={(e) => { e.preventDefault(); setLocation('/scanner'); }}
            className={`text-sm font-medium transition ${location === '/scanner' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {t('nav', 'scanner')}
          </a>
          <a
            href="/templates"
            onClick={(e) => { e.preventDefault(); setLocation('/templates'); }}
            className={`text-sm font-medium transition ${location === '/templates' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {t('nav', 'templates')}
          </a>
          <a
            href="/blog"
            onClick={(e) => { e.preventDefault(); setLocation('/blog'); }}
            className={`text-sm font-medium transition ${location === '/blog' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {t('nav', 'blog')}
          </a>
          <a
            href="/pricing"
            onClick={(e) => { e.preventDefault(); setLocation('/pricing'); }}
            className={`text-sm font-medium transition ${location === '/pricing' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Pricing
          </a>
          <a
            href="/documentation"
            onClick={(e) => { e.preventDefault(); setLocation('/documentation'); }}
            className={`text-sm font-medium transition ${location === '/documentation' ? 'text-blue-600 font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {t('nav', 'docs')}
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 border border-slate-200 dark:border-slate-800 rounded-lg px-2 py-1">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <select
              className="bg-transparent text-xs text-muted-foreground border-none outline-none cursor-pointer"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {supportedLanguages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.code.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {isInstallable && (
            <Button
              onClick={promptInstall}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-1.5 h-9 rounded-xl border-blue-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-900"
            >
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Install App</span>
            </Button>
          )}

          {location !== '/generator' && (
            <Button
              onClick={() => setLocation('/generator')}
              size="sm"
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 px-4"
            >
              {t('nav', 'getStarted')}
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 py-1"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>

          <a
            href="/generator"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/generator');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            QR Code Generator
          </a>

          <a
            href="/scanner"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/scanner');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'scanner')}
          </a>

          <a
            href="/templates"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/templates');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'templates')}
          </a>

          <a
            href="/pricing"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/pricing');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            Pricing
          </a>

          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/blog');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'blog')}
          </a>

          <a
            href="/documentation"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/documentation');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'docs')}
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/about');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'about')}
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              setLocation('/contact');
              setIsMobileMenuOpen(false);
            }}
            className="block text-sm font-medium text-foreground hover:text-blue-600 py-1"
          >
            {t('nav', 'contact')}
          </a>

          <div className="flex items-center gap-2 py-2 border-t border-slate-100 dark:border-slate-800 pt-3">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <select
              className="bg-transparent text-sm text-foreground border border-slate-200 dark:border-slate-800 rounded px-2 py-1"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {supportedLanguages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>

          {isInstallable && (
            <Button onClick={promptInstall} variant="outline" className="w-full justify-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-600" />
              <span>Install App</span>
            </Button>
          )}

          <Button
            onClick={() => {
              setLocation('/');
              setIsMobileMenuOpen(false);
            }}
            variant="secondary"
            className="w-full justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Button>
        </div>
      )}
    </nav>
  );
}
