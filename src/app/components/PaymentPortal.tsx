import { useState } from 'react';
import { CreditCard, DollarSign, Calendar, CheckCircle } from 'lucide-react';

export function PaymentPortal() {
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSubmitted(true);
    setTimeout(() => setPaymentSubmitted(false), 5000);
  };

  return (
    <div>
      <h2 className="text-2xl mb-6">Make a Payment</h2>

      {paymentSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-3">
          <CheckCircle className="h-5 w-5" />
          <span>Payment submitted successfully! You will receive a confirmation email shortly.</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl mb-4">Payment Summary</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Monthly Rent</p>
                  <p className="text-xl text-blue-600">$2,500.00</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Due Date</p>
                  <p className="text-lg text-orange-600">June 1, 2026</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Rent Amount</span>
                  <span>$2,500.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Processing Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-lg">Total</span>
                  <span className="text-lg">$2,500.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg mb-4">Recent Payments</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">May 2026</span>
                <span className="text-green-600">Paid - $2,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">April 2026</span>
                <span className="text-green-600">Paid - $2,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">March 2026</span>
                <span className="text-green-600">Paid - $2,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl mb-6">Payment Information</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Payment Method */}
              <div>
                <label className="block text-gray-700 mb-3">Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-3 p-4 rounded-lg border-2 border-blue-600 bg-blue-50"
                  >
                    <CreditCard className="h-6 w-6 text-blue-600" />
                    <div className="text-left">
                      <div className="text-gray-900">Credit/Debit Card</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard, Amex</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-300 hover:border-gray-400"
                  >
                    <DollarSign className="h-6 w-6 text-gray-400" />
                    <div className="text-left">
                      <div className="text-gray-900">Bank Transfer</div>
                      <div className="text-sm text-gray-600">ACH Payment</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Card Information */}
              <div>
                <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cardName" className="block text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  id="cardName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="saveCard" className="rounded" />
                <label htmlFor="saveCard" className="text-gray-700">
                  Save this card for future payments
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Pay $2,500.00</span>
              </button>

              <p className="text-sm text-gray-600 text-center">
                Your payment information is encrypted and secure
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
