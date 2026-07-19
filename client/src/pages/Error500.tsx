import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import { AlertCircle, Home } from 'lucide-react';

export default function Error500() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-4">
            <AlertCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-2">500</h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Server Error</h2>
        <p className="text-muted-foreground mb-8">
          Something went wrong on our end. We're working to fix it. Please try again later.
        </p>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
          >
            Try Again
          </Button>
          <Button
            onClick={() => setLocation('/')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
