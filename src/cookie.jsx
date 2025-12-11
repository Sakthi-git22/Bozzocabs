import React from 'react'

export const Cookie = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <section>
        <h2 className="text-2xl font-bold text-[#121212] mb-4">Cookie Policy</h2>
        <ul className="list-disc list-inside space-y-3 ml-2">
          <li>
             Bozzocabs uses cookies to improve app performance, save preferences, and analyze usage
          </li>
          <li>
            Cookies help personalize user experience and enable faster access to app features
          </li>
          <li>
            Users may disable cookies in device settings but some features may not work properly
          </li>
          <li>
             Cookies are not used to store sensitive personal information
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
  )
}

export default Cookie;