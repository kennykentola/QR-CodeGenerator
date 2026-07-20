export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-blue-100 text-lg">Last updated: July 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on QR Code Generator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
          <p className="text-muted-foreground">
            The materials on QR Code Generator are provided on an 'as is' basis. QR Code Generator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
          <p className="text-muted-foreground">
            In no event shall QR Code Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QR Code Generator.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
          <p className="text-muted-foreground">
            The materials appearing on QR Code Generator could include technical, typographical, or photographic errors. QR Code Generator does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Links</h2>
          <p className="text-muted-foreground">
            QR Code Generator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by QR Code Generator of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
          <p className="text-muted-foreground">
            QR Code Generator may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>
    </div>
  );
}
