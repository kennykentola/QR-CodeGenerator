import QRCode from 'qrcode';

export type QRType = 
  | 'url' | 'text' | 'email' | 'phone' | 'sms' | 'whatsapp' | 'wifi' | 'vcard' 
  | 'business_card' | 'google_maps' | 'location' | 'event' | 'calendar' | 'paypal' 
  | 'upi' | 'crypto' | 'instagram' | 'facebook' | 'tiktok' | 'linkedin' | 'youtube' 
  | 'twitter' | 'telegram' | 'discord' | 'zoom' | 'google_meet' | 'teams' 
  | 'app_store' | 'google_play' | 'pdf' | 'image' | 'video' | 'audio' 
  | 'menu' | 'coupon' | 'feedback' | 'survey' | 'custom';

export interface QRGeneratorOptions {
  type: QRType;
  data: Record<string, string>;
  foreground?: string;
  background?: string;
  size?: number;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  margin?: number;
  dotStyle?: 'square' | 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'extra-rounded';
  eyeStyle?: 'square' | 'circle' | 'rounded' | 'leaf';
  eyeColor?: string;
  logoUrl?: string;
  logoSize?: number;
  frameStyle?: string;
  frameText?: string;
  transparentBackground?: boolean;
}

export interface QRTypeConfig {
  label: string;
  description: string;
  fields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'select' | 'password';
    placeholder?: string;
    required?: boolean;
    options?: Array<{ label: string; value: string }>;
  }>;
  generateData: (fields: Record<string, string>) => string;
}

// QR Type Configurations
export const QR_TYPES: Record<QRType, QRTypeConfig> = {
  url: {
    label: 'Website URL',
    description: 'Link to a website or web page',
    fields: [
      { name: 'url', label: 'URL', type: 'url', placeholder: 'https://example.com', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  text: {
    label: 'Plain Text',
    description: 'Any text or message',
    fields: [
      { name: 'text', label: 'Text', type: 'text', placeholder: 'Enter your text', required: true }
    ],
    generateData: (fields) => fields.text || ''
  },
  
  email: {
    label: 'Email Address',
    description: 'Send an email',
    fields: [
      { name: 'email', label: 'Email', type: 'email', placeholder: 'user@example.com', required: true },
      { name: 'subject', label: 'Subject (optional)', type: 'text', placeholder: 'Email subject' },
      { name: 'body', label: 'Message (optional)', type: 'text', placeholder: 'Email body' }
    ],
    generateData: (fields) => {
      const email = fields.email || '';
      const subject = fields.subject ? `?subject=${encodeURIComponent(fields.subject)}` : '';
      const body = fields.body ? `&body=${encodeURIComponent(fields.body)}` : '';
      return `mailto:${email}${subject}${body}`;
    }
  },
  
  phone: {
    label: 'Phone Number',
    description: 'Call a phone number',
    fields: [
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true }
    ],
    generateData: (fields) => `tel:${fields.phone || ''}`
  },
  
  sms: {
    label: 'SMS Message',
    description: 'Send an SMS text message',
    fields: [
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true },
      { name: 'message', label: 'Message', type: 'text', placeholder: 'SMS message' }
    ],
    generateData: (fields) => {
      const phone = fields.phone || '';
      const message = fields.message ? `?body=${encodeURIComponent(fields.message)}` : '';
      return `sms:${phone}${message}`;
    }
  },
  
  whatsapp: {
    label: 'WhatsApp',
    description: 'Send a WhatsApp message',
    fields: [
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+1234567890', required: true },
      { name: 'message', label: 'Message', type: 'text', placeholder: 'WhatsApp message' }
    ],
    generateData: (fields) => {
      const phone = fields.phone?.replace(/\D/g, '') || '';
      const message = fields.message ? `?text=${encodeURIComponent(fields.message)}` : '';
      return `https://wa.me/${phone}${message}`;
    }
  },
  
  wifi: {
    label: 'WiFi Network',
    description: 'Connect to a WiFi network',
    fields: [
      { name: 'ssid', label: 'Network Name (SSID)', type: 'text', placeholder: 'WiFi network name', required: true },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'WiFi password' },
      { name: 'security', label: 'Security Type', type: 'select', options: [
        { label: 'WPA/WPA2', value: 'WPA' },
        { label: 'WEP', value: 'WEP' },
        { label: 'Open', value: 'nopass' }
      ], required: true }
    ],
    generateData: (fields) => {
      const ssid = fields.ssid || '';
      const password = fields.password || '';
      const security = fields.security || 'WPA';
      const hidden = 'false';
      return `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`;
    }
  },
  
  vcard: {
    label: 'vCard (Contact)',
    description: 'Digital business card contact',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1234567890' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
      { name: 'organization', label: 'Organization', type: 'text', placeholder: 'Company Name' },
      { name: 'title', label: 'Job Title', type: 'text', placeholder: 'Position' },
      { name: 'url', label: 'Website', type: 'url', placeholder: 'https://example.com' }
    ],
    generateData: (fields) => {
      const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
      if (fields.name) lines.push(`FN:${fields.name}`);
      if (fields.phone) lines.push(`TEL:${fields.phone}`);
      if (fields.email) lines.push(`EMAIL:${fields.email}`);
      if (fields.organization) lines.push(`ORG:${fields.organization}`);
      if (fields.title) lines.push(`TITLE:${fields.title}`);
      if (fields.url) lines.push(`URL:${fields.url}`);
      lines.push('END:VCARD');
      return lines.join('\n');
    }
  },
  
  business_card: {
    label: 'Business Card',
    description: 'Complete business card information',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
      { name: 'title', label: 'Job Title', type: 'text', placeholder: 'CEO' },
      { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
      { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1234567890' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
      { name: 'address', label: 'Address', type: 'text', placeholder: '123 Main St' },
      { name: 'website', label: 'Website', type: 'url', placeholder: 'https://example.com' }
    ],
    generateData: (fields) => {
      const lines = ['BEGIN:VCARD', 'VERSION:3.0'];
      if (fields.name) lines.push(`FN:${fields.name}`);
      if (fields.title) lines.push(`TITLE:${fields.title}`);
      if (fields.company) lines.push(`ORG:${fields.company}`);
      if (fields.phone) lines.push(`TEL:${fields.phone}`);
      if (fields.email) lines.push(`EMAIL:${fields.email}`);
      if (fields.address) lines.push(`ADR:;;${fields.address}`);
      if (fields.website) lines.push(`URL:${fields.website}`);
      lines.push('END:VCARD');
      return lines.join('\n');
    }
  },
  
  google_maps: {
    label: 'Google Maps Location',
    description: 'Link to a location on Google Maps',
    fields: [
      { name: 'location', label: 'Location Name or Address', type: 'text', placeholder: 'New York, NY', required: true }
    ],
    generateData: (fields) => `https://maps.google.com/?q=${encodeURIComponent(fields.location || '')}`
  },
  
  location: {
    label: 'GPS Coordinates',
    description: 'Geographic coordinates (latitude, longitude)',
    fields: [
      { name: 'latitude', label: 'Latitude', type: 'number', placeholder: '40.7128', required: true },
      { name: 'longitude', label: 'Longitude', type: 'number', placeholder: '-74.0060', required: true }
    ],
    generateData: (fields) => `geo:${fields.latitude || '0'},${fields.longitude || '0'}`
  },
  
  event: {
    label: 'Event (iCal)',
    description: 'Calendar event',
    fields: [
      { name: 'title', label: 'Event Title', type: 'text', placeholder: 'Conference', required: true },
      { name: 'date', label: 'Date (YYYYMMDD)', type: 'text', placeholder: '20240101', required: true },
      { name: 'time', label: 'Time (HHMMSS)', type: 'text', placeholder: '100000' },
      { name: 'location', label: 'Location', type: 'text', placeholder: 'Venue' },
      { name: 'description', label: 'Description', type: 'text', placeholder: 'Event details' }
    ],
    generateData: (fields) => {
      const lines = ['BEGIN:VEVENT', `SUMMARY:${fields.title || ''}`, `DTSTART:${fields.date || ''}T${fields.time || '000000'}Z`];
      if (fields.location) lines.push(`LOCATION:${fields.location}`);
      if (fields.description) lines.push(`DESCRIPTION:${fields.description}`);
      lines.push('END:VEVENT');
      return lines.join('\n');
    }
  },
  
  calendar: {
    label: 'Calendar Event',
    description: 'Add to calendar',
    fields: [
      { name: 'title', label: 'Event Title', type: 'text', placeholder: 'Meeting', required: true },
      { name: 'date', label: 'Date (YYYY-MM-DD)', type: 'text', placeholder: '2024-01-01', required: true },
      { name: 'time', label: 'Time (HH:MM)', type: 'text', placeholder: '10:00' },
      { name: 'duration', label: 'Duration (minutes)', type: 'number', placeholder: '60' }
    ],
    generateData: (fields) => {
      const dateStr = fields.date?.replace(/-/g, '') || '';
      const timeStr = fields.time?.replace(/:/g, '') || '000000';
      return `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${dateStr}T${timeStr}Z\nSUMMARY:${fields.title || ''}\nDURATION:PT${fields.duration || '60'}M\nEND:VEVENT\nEND:VCALENDAR`;
    }
  },
  
  paypal: {
    label: 'PayPal Payment',
    description: 'PayPal payment link',
    fields: [
      { name: 'email', label: 'PayPal Email', type: 'email', placeholder: 'merchant@example.com', required: true },
      { name: 'amount', label: 'Amount', type: 'number', placeholder: '10.00' },
      { name: 'currency', label: 'Currency', type: 'text', placeholder: 'USD' }
    ],
    generateData: (fields) => {
      const email = fields.email || '';
      const amount = fields.amount ? `&amount=${fields.amount}` : '';
      const currency = fields.currency ? `&currency_code=${fields.currency}` : '';
      return `https://www.paypal.me/${email}${amount}${currency}`;
    }
  },
  
  upi: {
    label: 'UPI Payment',
    description: 'Unified Payments Interface (India)',
    fields: [
      { name: 'upi_id', label: 'UPI ID', type: 'text', placeholder: 'user@bank', required: true },
      { name: 'name', label: 'Payee Name', type: 'text', placeholder: 'John Doe' },
      { name: 'amount', label: 'Amount', type: 'number', placeholder: '100' },
      { name: 'note', label: 'Note', type: 'text', placeholder: 'Payment for...' }
    ],
    generateData: (fields) => {
      const upi = fields.upi_id || '';
      const name = fields.name ? `&pn=${encodeURIComponent(fields.name)}` : '';
      const amount = fields.amount ? `&am=${fields.amount}` : '';
      const note = fields.note ? `&tn=${encodeURIComponent(fields.note)}` : '';
      return `upi://pay?pa=${upi}${name}${amount}${note}`;
    }
  },
  
  crypto: {
    label: 'Cryptocurrency Wallet',
    description: 'Cryptocurrency wallet address',
    fields: [
      { name: 'address', label: 'Wallet Address', type: 'text', placeholder: '1A1z7agoat...', required: true },
      { name: 'coin', label: 'Cryptocurrency', type: 'select', options: [
        { label: 'Bitcoin', value: 'bitcoin' },
        { label: 'Ethereum', value: 'ethereum' },
        { label: 'Litecoin', value: 'litecoin' }
      ], required: true }
    ],
    generateData: (fields) => {
      const coin = fields.coin || 'bitcoin';
      const address = fields.address || '';
      return `${coin}:${address}`;
    }
  },
  
  instagram: {
    label: 'Instagram Profile',
    description: 'Link to Instagram profile',
    fields: [
      { name: 'username', label: 'Instagram Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://instagram.com/${fields.username || ''}`
  },
  
  facebook: {
    label: 'Facebook Profile',
    description: 'Link to Facebook profile',
    fields: [
      { name: 'username', label: 'Facebook Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://facebook.com/${fields.username || ''}`
  },
  
  tiktok: {
    label: 'TikTok Profile',
    description: 'Link to TikTok profile',
    fields: [
      { name: 'username', label: 'TikTok Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://tiktok.com/@${fields.username || ''}`
  },
  
  linkedin: {
    label: 'LinkedIn Profile',
    description: 'Link to LinkedIn profile',
    fields: [
      { name: 'username', label: 'LinkedIn Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://linkedin.com/in/${fields.username || ''}`
  },
  
  youtube: {
    label: 'YouTube Channel',
    description: 'Link to YouTube channel',
    fields: [
      { name: 'channel', label: 'Channel Name or ID', type: 'text', placeholder: '@channelname', required: true }
    ],
    generateData: (fields) => `https://youtube.com/${fields.channel || ''}`
  },
  
  twitter: {
    label: 'Twitter/X Profile',
    description: 'Link to Twitter/X profile',
    fields: [
      { name: 'username', label: 'Twitter Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://twitter.com/${fields.username || ''}`
  },
  
  telegram: {
    label: 'Telegram',
    description: 'Telegram contact or channel',
    fields: [
      { name: 'username', label: 'Telegram Username', type: 'text', placeholder: 'username', required: true }
    ],
    generateData: (fields) => `https://t.me/${fields.username || ''}`
  },
  
  discord: {
    label: 'Discord Server',
    description: 'Discord server invite',
    fields: [
      { name: 'invite_code', label: 'Invite Code', type: 'text', placeholder: 'abc123xyz', required: true }
    ],
    generateData: (fields) => `https://discord.gg/${fields.invite_code || ''}`
  },
  
  zoom: {
    label: 'Zoom Meeting',
    description: 'Zoom meeting link',
    fields: [
      { name: 'meeting_id', label: 'Meeting ID', type: 'text', placeholder: '123456789', required: true }
    ],
    generateData: (fields) => `https://zoom.us/wc/join/${fields.meeting_id || ''}`
  },
  
  google_meet: {
    label: 'Google Meet',
    description: 'Google Meet room',
    fields: [
      { name: 'room_code', label: 'Room Code', type: 'text', placeholder: 'abc-defg-hij', required: true }
    ],
    generateData: (fields) => `https://meet.google.com/${fields.room_code || ''}`
  },
  
  teams: {
    label: 'Microsoft Teams',
    description: 'Microsoft Teams meeting',
    fields: [
      { name: 'meeting_link', label: 'Meeting Link', type: 'url', placeholder: 'https://teams.microsoft.com/...', required: true }
    ],
    generateData: (fields) => fields.meeting_link || ''
  },
  
  app_store: {
    label: 'App Store',
    description: 'iOS App Store link',
    fields: [
      { name: 'app_id', label: 'App ID', type: 'text', placeholder: '123456789', required: true }
    ],
    generateData: (fields) => `https://apps.apple.com/app/id${fields.app_id || ''}`
  },
  
  google_play: {
    label: 'Google Play Store',
    description: 'Android Google Play link',
    fields: [
      { name: 'package_name', label: 'Package Name', type: 'text', placeholder: 'com.example.app', required: true }
    ],
    generateData: (fields) => `https://play.google.com/store/apps/details?id=${fields.package_name || ''}`
  },
  
  pdf: {
    label: 'PDF Download',
    description: 'Link to a PDF file',
    fields: [
      { name: 'url', label: 'PDF URL', type: 'url', placeholder: 'https://example.com/file.pdf', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  image: {
    label: 'Image URL',
    description: 'Link to an image',
    fields: [
      { name: 'url', label: 'Image URL', type: 'url', placeholder: 'https://example.com/image.jpg', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  video: {
    label: 'Video URL',
    description: 'Link to a video',
    fields: [
      { name: 'url', label: 'Video URL', type: 'url', placeholder: 'https://youtube.com/watch?v=...', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  audio: {
    label: 'Audio URL',
    description: 'Link to audio file',
    fields: [
      { name: 'url', label: 'Audio URL', type: 'url', placeholder: 'https://example.com/audio.mp3', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  menu: {
    label: 'Restaurant Menu',
    description: 'Restaurant menu link',
    fields: [
      { name: 'url', label: 'Menu URL', type: 'url', placeholder: 'https://example.com/menu', required: true },
      { name: 'restaurant', label: 'Restaurant Name', type: 'text', placeholder: 'Restaurant Name' }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  coupon: {
    label: 'Coupon/Discount',
    description: 'Coupon or discount code',
    fields: [
      { name: 'code', label: 'Coupon Code', type: 'text', placeholder: 'SAVE20', required: true },
      { name: 'discount', label: 'Discount', type: 'text', placeholder: '20% off' },
      { name: 'url', label: 'Redemption URL', type: 'url', placeholder: 'https://example.com/redeem' }
    ],
    generateData: (fields) => {
      const code = fields.code || '';
      const discount = fields.discount ? ` - ${fields.discount}` : '';
      const url = fields.url ? `\n${fields.url}` : '';
      return `Coupon: ${code}${discount}${url}`;
    }
  },
  
  feedback: {
    label: 'Feedback Form',
    description: 'Link to feedback form',
    fields: [
      { name: 'url', label: 'Form URL', type: 'url', placeholder: 'https://forms.example.com/feedback', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  survey: {
    label: 'Survey',
    description: 'Link to survey',
    fields: [
      { name: 'url', label: 'Survey URL', type: 'url', placeholder: 'https://survey.example.com', required: true }
    ],
    generateData: (fields) => fields.url || ''
  },
  
  custom: {
    label: 'Custom Data',
    description: 'Any custom data or format',
    fields: [
      { name: 'data', label: 'Custom Data', type: 'text', placeholder: 'Enter any text or data', required: true }
    ],
    generateData: (fields) => fields.data || ''
  }
};

/**
 * Generate QR code as data URL
 */
export async function generateQRCode(data: string, options: Partial<QRGeneratorOptions> = {}): Promise<string> {
  try {
    const qrOptions = {
      errorCorrectionLevel: options.errorCorrectionLevel || 'H',
      type: 'image/png' as const,
      quality: 0.95,
      margin: options.margin || 1,
      width: options.size || 300,
      color: {
        dark: options.foreground || '#000000',
        light: options.background || '#FFFFFF'
      }
    };

    return await QRCode.toDataURL(data, qrOptions);
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
}

/**
 * Generate QR code as canvas
 */
export async function generateQRCodeCanvas(
  canvas: HTMLCanvasElement,
  data: string,
  options: Partial<QRGeneratorOptions> = {}
): Promise<void> {
  try {
    const qrOptions = {
      errorCorrectionLevel: options.errorCorrectionLevel || 'H',
      type: 'image/png' as const,
      quality: 0.95,
      margin: options.margin || 1,
      width: options.size || 300,
      color: {
        dark: options.foreground || '#000000',
        light: options.background || '#FFFFFF'
      }
    };

    await QRCode.toCanvas(canvas, data, qrOptions);
  } catch (error) {
    console.error('Error generating QR code on canvas:', error);
    throw error;
  }
}

/**
 * Get all available QR types
 */
export function getQRTypes(): Array<{ id: QRType; label: string; description: string }> {
  return Object.entries(QR_TYPES).map(([id, config]) => ({
    id: id as QRType,
    label: config.label,
    description: config.description
  }));
}

/**
 * Get QR type configuration
 */
export function getQRTypeConfig(type: QRType): QRTypeConfig {
  return QR_TYPES[type];
}

/**
 * Draw a QR code onto a canvas, then overlay a logo image centered on it.
 * Uses error correction level 'H' (30%) which is required when a logo
 * is placed on a QR code so it remains scannable.
 *
 * @param canvas   - Target <canvas> element to draw on
 * @param data     - The QR code data string
 * @param options  - QR styling options
 * @param logoSrc  - Data URL or absolute URL of the logo image
 * @param logoRatio - Logo size as a fraction of QR size (0.1 – 0.35)
 */
export async function generateQRCodeWithLogo(
  canvas: HTMLCanvasElement,
  data: string,
  options: Partial<QRGeneratorOptions> = {},
  logoSrc: string,
  logoRatio: number = 0.25
): Promise<void> {
  const size = options.size || 300;
  canvas.width = size;
  canvas.height = size;

  // Step 1: Render QR onto canvas (force H-level for logo scannability)
  await generateQRCodeCanvas(canvas, data, {
    ...options,
    size,
    errorCorrectionLevel: 'H',
  });

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  // Step 2: Load the logo image
  const logo = await new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = logoSrc;
  });

  // Step 3: Calculate logo dimensions + center position
  const logoSize = Math.floor(size * Math.min(Math.max(logoRatio, 0.1), 0.35));
  const padding = Math.floor(logoSize * 0.15);
  const bgSize = logoSize + padding * 2;
  const x = (size - bgSize) / 2;
  const y = (size - bgSize) / 2;
  const radius = Math.floor(bgSize * 0.15);

  // Step 4: Draw white rounded-rect background
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + bgSize - radius, y);
  ctx.quadraticCurveTo(x + bgSize, y, x + bgSize, y + radius);
  ctx.lineTo(x + bgSize, y + bgSize - radius);
  ctx.quadraticCurveTo(x + bgSize, y + bgSize, x + bgSize - radius, y + bgSize);
  ctx.lineTo(x + radius, y + bgSize);
  ctx.quadraticCurveTo(x, y + bgSize, x, y + bgSize - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0,0,0,0.12)';
  ctx.shadowBlur = 6;
  ctx.fill();
  ctx.restore();

  // Step 5: Draw logo centered inside background
  const logoX = x + padding;
  const logoY = y + padding;
  ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);
}

