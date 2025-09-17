import React from 'react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartModal: React.FC = () => {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, openCheckout } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
      openCheckout();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart}
        >
          <motion.div
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={e => e.stopPropagation()}
          >
            <header className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[--navy]">Your Order</h2>
              <button onClick={closeCart} className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </header>
            
            <div className="flex-grow p-6 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                <ul className="divide-y">
                  {cart.map(item => (
                    <li key={item.id} className="py-4 flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        <div className="flex items-center mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 border rounded-l">-</button>
                          <span className="px-3 border-t border-b">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border rounded-r">+</button>
                        </div>
                      </div>
                      <div className="text-right">
                          <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm hover:underline mt-1">Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <footer className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center font-bold text-lg mb-4">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout} 
                  className="w-full bg-[--gold] text-[--navy] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
