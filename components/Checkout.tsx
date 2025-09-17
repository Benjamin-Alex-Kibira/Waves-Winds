import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckoutProps {
    onOrderPlaced: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onOrderPlaced }) => {
  const { isCheckoutOpen, closeCheckout, cart, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onOrderPlaced();
      clearCart();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCheckout}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <header className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[--navy]">Checkout</h2>
              <button onClick={closeCheckout} className="text-gray-500 hover:text-gray-800">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>

            <div className="flex-grow p-6 overflow-y-auto max-h-[70vh] grid md:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="md:border-r md:pr-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
                  <div className="space-y-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-gray-600">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <hr className="my-4"/>
                  <div className="space-y-2 font-semibold">
                     <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                       <div className="flex justify-between text-gray-600">
                        <span>Taxes</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                       <div className="flex justify-between text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                  </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Payment Details</h3>
                <div className="space-y-4">
                   <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
                      <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm" required/>
                   </div>
                   <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                      <input type="text" id="cardNumber" placeholder="•••• •••• •••• ••••" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm" required/>
                   </div>
                   <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry</label>
                            <input type="text" id="expiry" placeholder="MM/YY" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm" required/>
                        </div>
                        <div className="flex-1">
                            <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                            <input type="text" id="cvc" placeholder="•••" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm" required/>
                        </div>
                   </div>
                </div>
                 <button
                  type="submit"
                  disabled={isProcessing}
                  className="mt-8 w-full bg-[--gold] text-[--navy] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
