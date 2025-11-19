"use client";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 md:px-20 lg:px-40 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="mb-4">Last Updated: January 1, 2025</p>

      <p className="mb-6">
        This Cookies Policy explains how <strong>Your Company Name</strong> (“we”, “our”, or 
        “us”) uses cookies and similar technologies when you visit our website and services.
        By using our platform, you agree to the use of cookies as described here.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies?</h2>
      <p className="mb-6">
        Cookies are small text files stored on your device when you browse a website. 
        They allow websites to remember your actions, settings, preferences, and help 
        improve your browsing experience.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mb-3">2. Types of Cookies We Use</h2>

      <h3 className="text-lg font-semibold mb-2">2.1 Essential Cookies</h3>
      <p className="mb-4">
        These cookies are necessary for basic website functions, such as:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>Authenticating users</li>
        <li>Maintaining sessions</li>
        <li>Enabling secure areas</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">2.2 Performance & Analytics Cookies</h3>
      <p className="mb-4">
        These cookies help us understand how users navigate our website, enabling us to 
        improve features and user experience. For example, we may use Google Analytics 
        or similar services.
      </p>

      <h3 className="text-lg font-semibold mb-2">2.3 Functional Cookies</h3>
      <p className="mb-6">
        These cookies allow the site to remember user preferences such as language 
        settings, login details, and saved preferences.
      </p>

      <h3 className="text-lg font-semibold mb-2">2.4 Advertising & Targeting Cookies</h3>
      <p className="mb-6">
        These cookies are used to show personalized ads and measure ad campaign 
        performance. They may track your browsing behavior across different websites 
        without storing personal identification.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mb-3">3. Third-Party Cookies</h2>
      <p className="mb-6">
        Some cookies are placed by third-party partners such as analytics tools, 
        payment processors, or advertising networks. These cookies are subject to 
        their respective privacy policies.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mb-3">4. Managing Cookies</h2>
      <p className="mb-4">
        You can manage or disable cookies at any time by adjusting your browser settings. 
        However, disabling some cookies may affect the functionality of certain website features.
      </p>

      <ul className="list-disc ml-6 mb-6">
        <li>Block all cookies</li>
        <li>Block third-party cookies</li>
        <li>Delete stored cookies</li>
        <li>Notify you when cookies are being used</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mb-3">5. Updates to This Policy</h2>
      <p className="mb-6">
        We may update this Cookies Policy occasionally. Changes will be posted on this 
        page with a revised “Last Updated” date.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
      <p>
        If you have questions about this Cookies Policy, contact us at:
        <br />
        <strong>email@yourcompany.com</strong>
      </p>
    </div>
  );
}
