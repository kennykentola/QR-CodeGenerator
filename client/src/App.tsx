import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Error500 from "./pages/Error500";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import QRGenerator from "./pages/QRGenerator";
import QRScanner from "./pages/QRScanner";
import BarcodeGenerator from "./pages/BarcodeGenerator";
import Templates from "./pages/Templates";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import API from "./pages/API";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
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
      <Route path={"/404"} component={NotFound} />
      <Route path={"/500"} component={Error500} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
