import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckoutProps {
  onOrderPlaced: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onOrderPlaced }) => {
  const { isCheckoutOpen, closeCheckout, cart, clearCart } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isProcessing) return;

    setIsProcessing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      onOrderPlaced();
      // Reset form as the component closes
      setFormData({
        name: '',
        address: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
      });
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
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="p-6 border-b flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold text-[--navy]">Checkout</h2>
              <button onClick={closeCheckout} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>
            
            <div className="flex-grow overflow-y-auto">
              <form id="checkoutForm" onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="md:col-span-1">
                  <h3 className="text-xl font-semibold mb-4 text-[--navy]">Order Summary</h3>
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto pr-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="truncate pr-2">{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-[--navy]">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[--navy]">Shipping & Payment</h3>
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                    <input type="text" name="address" id="address" required onChange={handleChange} value={formData.address} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" name="cardNumber" id="cardNumber" placeholder="•••• •••• •••• ••••" required onChange={handleChange} value={formData.cardNumber} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm p-2 border" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry</label>
                          <input type="text" name="expiry" id="expiry" placeholder="MM/YY" required onChange={handleChange} value={formData.expiry} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm p-2 border" />
                      </div>
                      <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                          <input type="text" name="cvv" id="cvv" placeholder="•••" required onChange={handleChange} value={formData.cvv} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[--gold] focus:border-[--gold] sm:text-sm p-2 border" />
                      </div>
                  </div>
                </div>
              </form>
            </div>
            
            <footer className="p-6 border-t bg-gray-50 flex-shrink-0">
               <button
                  type="submit"
                  form="checkoutForm"
                  disabled={isProcessing || cart.length === 0}
                  className="w-full bg-[--gold] text-[--navy] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
                </button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
