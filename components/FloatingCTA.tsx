import React from 'react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const FloatingCTA: React.FC = () => {
    const { openCart, cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
        <motion.button
            onClick={openCart}
            className="fixed bottom-6 right-6 bg-[--gold] text-[--navy] rounded-full p-4 shadow-lg hover:scale-110 transition-transform z-40"
            aria-label="Open Takeout Order"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </motion.button>
    );
};

export default FloatingCTA;
