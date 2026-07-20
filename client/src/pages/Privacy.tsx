export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: July 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="text-muted-foreground">
            QR Code Generator operates the QR Code Generator website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
          <p className="text-muted-foreground mb-4">
            We collect different types of information for various purposes to provide and improve our service to you.
          </p>
          <h3 className="text-lg font-semibold mb-3">Types of Data Collected:</h3>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Personal Data: Email address, name, and usage data</li>
            <li>Usage Data: IP address, browser type, pages visited, and timestamps</li>
            <li>Cookies: For improving user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Data Processing</h2>
          <p className="text-muted-foreground">
            All QR code generation happens in your browser. We do not store your QR codes or the data used to generate them on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
          <p className="text-muted-foreground">
            The security of your data is important to us. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at: support@qrgenerator.app
          </p>
        </section>
      </div>
    </div>
  );
}
