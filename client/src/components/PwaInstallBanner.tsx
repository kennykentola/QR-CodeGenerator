import React from 'react';
import { usePwa } from '@/contexts/PwaContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Download, X, Share, PlusSquare, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

export const PwaInstallBanner: React.FC = () => {
  const {
    isInstallable,
    isStandalone,
    isIOS,
    promptInstall,
    isBannerDismissed,
    dismissBanner,
    showIOSGuide,
    setShowIOSGuide,
  } = usePwa();

  if (isStandalone) return null;

  return (
    <>
      {/* Sticky Bottom Floating Banner */}
      <AnimatePresence>
        {isInstallable && !isBannerDismissed && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto"
          >
            <Card className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-slate-800 rounded-2xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-foreground truncate">
                    Install QR Generator
                  </h4>
                  <p className="text-xs text-muted-foreground truncate">
                    Fast access, offline mode & no store download required
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  onClick={promptInstall}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm h-9 px-4 rounded-xl flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Install</span>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={dismissBanner}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground rounded-full"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Installation Instructions Modal */}
      <Dialog open={showIOSGuide} onOpenChange={setShowIOSGuide}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 rounded-2xl p-6">
          <DialogHeader>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-3">
              <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <DialogTitle className="text-xl font-bold">Install on iPhone / iPad</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-1">
              Follow these simple steps in Safari to add QR Generator to your home screen:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-3">
            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <Share className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">1. Tap the Share Button</p>
                <p className="text-xs text-muted-foreground">
                  At the bottom of your Safari screen (or top on iPad), tap the Share icon.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <PlusSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2. Select "Add to Home Screen"</p>
                <p className="text-xs text-muted-foreground">
                  Scroll down the share options menu and tap <span className="font-medium text-foreground">Add to Home Screen</span>.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">3. Tap "Add"</p>
                <p className="text-xs text-muted-foreground">
                  Tap <span className="font-medium text-foreground">Add</span> in the top right corner to install app on your device.
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
              onClick={() => setShowIOSGuide(false)}
            >
              Got it!
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default PwaInstallBanner;
