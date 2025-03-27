import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-2xl">
        <Navbar />
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Qurky Q <span className="text-purple-400">Privacy Policy</span>
          </h1>
          <p className="text-base text-gray-300 max-w-xl mx-auto animate-fade-in-delay">
            Last Updated: March 26, 2025
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-indigo-700 p-8 rounded-3xl shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Qurky Q ("we," "us," or "our"). We provide salon and healthcare booking services through our platform. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, mobile applications, or services (collectively, the "Services"). By using our Services, you agree to the terms of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-300">
              We collect the following types of information:
              <ul className="list-disc list-inside mt-2">
                <li>Personal Information: Name, email address, phone number, payment details, and account credentials when you register or book a service.</li>
                <li>Booking Information: Details about your appointments, including dates, times, and service providers.</li>
                <li>Usage Data: Information about how you interact with our Services, such as IP address, browser type, and pages visited.</li>
                <li>Location Data: Approximate location based on your IP address or precise location if you enable location services.</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300">
              Qurky Q uses your information to:
              <ul className="list-disc list-inside mt-2">
                <li>Provide and manage our Services, including booking appointments and processing payments.</li>
                <li>Communicate with you about your bookings, updates, or promotions.</li>
                <li>Improve our platform by analyzing usage trends and preferences.</li>
                <li>Prevent fraud and ensure the security of our Services.</li>
              </ul>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-300">
              We may share your information with:
              <ul className="list-disc list-inside mt-2">
                <li>Service Providers: Salons, doctors, and payment processors necessary to fulfill your bookings.</li>
                <li>Business Partners: For marketing or analytics purposes, with your consent where required.</li>
                <li>Legal Authorities: When required by law or to protect Qurky Q's rights and safety.</li>
              </ul>
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300">
              Qurky Q implements industry-standard security measures, including encryption and secure servers, to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-300">
              You have the following rights regarding your information:
              <ul className="list-disc list-inside mt-2">
                <li>Access and update your personal information through your account settings.</li>
                <li>Request deletion of your account and associated data, subject to legal obligations.</li>
                <li>Opt out of marketing communications via email preferences.</li>
                <li>Disable location services through your device settings.</li>
              </ul>
              To exercise these rights, contact us at privacy@qurkyq.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-300">
              Qurky Q uses cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300">
              Our Services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn such data has been collected, we will delete it promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our Services. Your continued use of the Services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
              <br />
              Qurky Q
              <br />
              Email: privacy@qurkyq.com
              <br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;