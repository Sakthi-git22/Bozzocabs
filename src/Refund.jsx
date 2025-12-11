import React from 'react'

export const Refund = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <section>
        <h2 className="text-2xl font-bold text-[#121212] mb-4">Refund & Cancellation Policy</h2>
        <ul className="list-disc list-inside space-y-3 ml-2 text-gray-700">
          <li>
            Refunds are provided only in cases of improper charges, duplicate payments, or verified technical errors.
          </li>
          <li>
            If a ride is cancelled by the driver, users may receive a full or partial refund depending on the specific circumstances of the cancellation.
          </li>
          <li>
            <strong>Cancellation Fees:</strong> A cancellation fee may apply if the user cancels a ride after the driver has accepted and confirmed the booking.
          </li>
          <li>
            <strong>Processing Time:</strong> Approved refunds are typically processed within 7–10 business days and credited to the original payment method.
          </li>
        </ul>
      </section>
      
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

export default Refund;