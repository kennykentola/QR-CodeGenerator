/**
 * useQRUsage — tracks free-tier usage and paid status in localStorage.
 *
 * Free tier: 3 QR code generations.
 * After that the user must pay ₦1,000 via manual OPay transfer to unlock unlimited access.
 * The paid token is stored in localStorage so it persists across sessions.
 */

import { useState, useCallback } from 'react';

const STORAGE_KEY_COUNT = 'qr_usage_count';
const STORAGE_KEY_PAID = 'qr_paid_token';
const FREE_LIMIT = 3;

function getStoredCount(): number {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY_COUNT) ?? '0', 10) || 0;
  } catch {
    return 0;
  }
}

function getStoredPaidToken(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY_PAID);
  } catch {
    return null;
  }
}

export function useQRUsage() {
  const [usageCount, setUsageCount] = useState<number>(getStoredCount);
  const [paidToken, setPaidToken] = useState<string | null>(getStoredPaidToken);

  const isPaid = Boolean(paidToken);
  const remainingFree = Math.max(0, FREE_LIMIT - usageCount);
  const isLimitReached = !isPaid && usageCount >= FREE_LIMIT;

  /** Call this every time a QR code is successfully generated. */
  const recordUsage = useCallback(() => {
    if (isPaid) return; // unlimited
    const next = getStoredCount() + 1;
    try {
      localStorage.setItem(STORAGE_KEY_COUNT, String(next));
    } catch {
      // ignore storage errors
    }
    setUsageCount(next);
  }, [isPaid]);

  /** Call this after successful OPay manual transfer verification (passcode unlock). */
  const markAsPaid = useCallback((reference: string) => {
    try {
      localStorage.setItem(STORAGE_KEY_PAID, reference);
    } catch {
      // ignore storage errors
    }
    setPaidToken(reference);
  }, []);

  return {
    usageCount,
    isPaid,
    remainingFree,
    isLimitReached,
    recordUsage,
    markAsPaid,
  };
}
