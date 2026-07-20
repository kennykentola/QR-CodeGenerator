import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Error500 from "./pages/Error500";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import './i18n';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const QRGenerator = lazy(() => import('./pages/QRGenerator'));
const QRScanner = lazy(() => import('./pages/QRScanner'));
const BarcodeGenerator = lazy(() => import('./pages/BarcodeGenerator'));
const Templates = lazy(() => import('./pages/Templates'));
const Documentation = lazy(() => import('./pages/Documentation'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Pricing = lazy(() => import('./pages/Pricing'));
const API = lazy(() => import('./pages/API'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
  );
}

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={LandingPage} />
        <Route path={"/generator"} component={QRGenerator} />
        <Route path={"/scanner"} component={QRScanner} />
        <Route path={"/barcode"} component={BarcodeGenerator} />
        <Route path={"/templates"} component={Templates} />
        <Route path={"/documentation"} component={Documentation} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/pricing"} component={Pricing} />
        <Route path={"/api-docs"} component={API} />
        <Route path={"/about"} component={About} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/blog"} component={BlogList} />
        <Route path={"/blog/:slug"} component={BlogPost} />
        <Route path={"/404"} component={NotFound} />
        <Route path={"/500"} component={Error500} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
