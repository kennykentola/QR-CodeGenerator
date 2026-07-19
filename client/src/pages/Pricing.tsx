import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-blue-100 text-lg">Try it for free, then pay once for unlimited access.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Free Tier */}
          <Card className="p-8 text-center border border-slate-200 dark:border-slate-800 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">Free Trial</h3>
            <div className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">₦0</div>
            <p className="text-muted-foreground text-sm mb-6">First 3 QR codes are on us</p>
            <ul className="space-y-3 mb-8 text-left flex-grow">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Up to 3 QR code generations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>35+ QR code types</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>PNG & JPEG downloads</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Custom colors and styles</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Logo upload support</span>
              </li>
            </ul>
            <Button className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100" asChild>
              <a href="/generator">Start Free Trial</a>
            </Button>
          </Card>

          {/* Premium Tier */}
          <Card className="p-8 text-center border-2 border-blue-600 relative flex flex-col shadow-xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Unlimited Access
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-4xl font-bold text-blue-600 mb-2">₦1,000</div>
            <p className="text-muted-foreground text-sm mb-6">One-time payment, lifetime access</p>
            <ul className="space-y-3 mb-8 text-left flex-grow">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-foreground">Unlimited QR code generations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Everything in the Free plan</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>No recurring monthly subscriptions</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>No registration required to purchase</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Simple manual transfer via OPay</span>
              </li>
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="/generator">Unlock Now</a>
            </Button>
          </Card>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-8 text-center max-w-4xl mx-auto border border-blue-100 dark:border-blue-900/50">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Why a one-time payment?</h3>
          <p className="text-blue-800/80 dark:text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            We hate subscriptions just as much as you do. Instead of charging you every month to keep your QR codes working, we charge a tiny one-time fee of ₦1,000 to keep the servers running. Pay once, use it forever.
          </p>
        </div>
      </div>
    </div>
  );
}
