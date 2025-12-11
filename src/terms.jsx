import React from 'react';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121212] mb-4">Terms and Conditions</h1>
        </div>

        {/* Content Container */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          {/* Section 1: Introduction & Usage */}
          <section>
            <h2 className="text-2xl font-bold text-[#121212] mb-4">1. General Terms of Use</h2>
            <p className="mb-4">
              Welcome to Bozzocabs. By downloading, accessing, or using our mobile application or website, 
              you agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
              please do not use our services.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong>User Accounts:</strong> You are responsible for maintaining the confidentiality of your account credentials.
              </li>
              <li>
                <strong>Misconduct:</strong> Any misconduct, abusive behavior towards drivers, or fraudulent activity may lead to immediate account suspension or permanent ban.
              </li>
              <li>
                <strong>Pricing:</strong> Pricing is calculated based on distance, time, surge fees (during high demand), and other applicable charges such as tolls or taxes.
              </li>
              <li>
                <strong>Modifications:</strong> Bozzocabs reserves the right to modify or update these terms at any time without prior notice. Continued use of the service constitutes acceptance of the new terms.
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
            <h3 className="font-bold text-lg text-[#121212] mb-2">Have questions?</h3>
            <p>
              If you have any concerns regarding these terms, please contact us at: 
              <a href="mailto:Bozzocab@gmail.com" className="text-blue-600 font-medium ml-1 hover:underline">
                Bozzocab@gmail.com
                </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;