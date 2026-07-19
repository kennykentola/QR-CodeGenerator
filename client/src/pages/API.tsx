import { Card } from '@/components/ui/card';
import { Code, BookOpen, Zap } from 'lucide-react';

export default function API() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
          <p className="text-blue-100 text-lg">Coming Soon - Integrate QR code generation into your applications</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">REST API</h3>
            <p className="text-muted-foreground">
              Generate QR codes programmatically using our REST API. Coming soon with comprehensive documentation.
            </p>
          </Card>

          <Card className="p-6">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Webhooks</h3>
            <p className="text-muted-foreground">
              Receive real-time notifications when QR codes are generated. Perfect for tracking and analytics.
            </p>
          </Card>

          <Card className="p-6">
            <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">SDKs</h3>
            <p className="text-muted-foreground">
              Official SDKs for popular programming languages. JavaScript, Python, Ruby, and more coming soon.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-blue-50 dark:bg-blue-950">
          <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-4">
            We are working on a comprehensive API that will allow developers to integrate QR code generation into their applications. The API will include:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Generate QR codes programmatically</li>
            <li>Support for all 35+ QR types</li>
            <li>Batch generation capabilities</li>
            <li>Advanced customization options</li>
            <li>Analytics and tracking</li>
            <li>Webhook support</li>
            <li>Official SDKs for popular languages</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Sign up for updates to be notified when the API becomes available.
          </p>
        </Card>
      </div>
    </div>
  );
}
