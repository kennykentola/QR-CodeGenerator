import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Zap, Star, CheckCircle2, KeyRound, Copy, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface PaywallModalProps {
  isOpen: boolean;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

const SECRET_PASSCODE = 'OPAY-VIPKENNY';
const WHATSAPP_NUMBER = '2348163571677';

export default function PaywallModal({ isOpen, onSuccess, onClose }: PaywallModalProps) {
  const [passcode, setPasscode] = useState('');

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('8163571677');
    toast.success('Account number copied to clipboard');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello, I just paid ₦1,000 for the QR Generator Premium. Here is my payment receipt:');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleUnlock = () => {
    if (passcode.trim().toUpperCase() === SECRET_PASSCODE) {
      toast.success('Passcode accepted! Unlimited access unlocked 🎉');
      onSuccess(`manual_unlock_${Date.now()}`);
    } else {
      toast.error('Invalid passcode. Please check and try again.');
    }
  };

  const benefits = [
    'Unlimited QR code generations',
    'Logo overlay on all QR codes',
    'All 35+ QR code types',
    'PNG, JPEG downloads',
    'Real-time customization',
    'No monthly fees — one-time payment',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm fixed"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden my-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
          >
            {/* Header gradient */}
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 p-8 text-white text-center relative">
              {onClose && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                <QrCode className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-1">Unlock Unlimited Access</h2>
              <p className="text-green-100 text-sm">You've used your 3 free QR codes</p>

              {/* Price badge */}
              <div className="mt-4 inline-flex items-center gap-2 bg-white/20 rounded-full px-5 py-2">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="font-bold text-xl">₦1,000</span>
                <span className="text-green-100 text-sm">one-time payment</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Payment Instructions */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  How to Pay & Unlock
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-xs text-muted-foreground">Bank</p>
                      <p className="font-bold">OPay</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-xs text-muted-foreground">Account Number</p>
                      <p className="font-bold font-mono text-lg tracking-wider">8163571677</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleCopyAccount} className="h-8">
                      <Copy className="w-4 h-4 mr-1" /> Copy
                    </Button>
                  </div>

                  <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <div>
                      <p className="text-xs text-muted-foreground">Account Name</p>
                      <p className="font-bold uppercase">Ademola Peter Kehinde</p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  I have paid — Send Receipt on WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Send your receipt to get the VIP Passcode
                </p>
              </div>

              {/* Passcode Entry */}
              <div className="space-y-3">
                <label className="block text-sm font-medium" htmlFor="passcode">
                  Have your VIP Passcode?
                </label>
                <div className="flex gap-2">
                  <input
                    id="passcode"
                    type="text"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter unlock code..."
                    className="flex-1 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 uppercase font-mono"
                  />
                  <Button
                    onClick={handleUnlock}
                    className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    <KeyRound className="w-4 h-4 mr-2" />
                    Unlock
                  </Button>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
