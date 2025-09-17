import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '../constants/menuData';
import { useCart } from '../contexts/CartContext';

interface MenuItemModalProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg w-full max-w-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-[--navy] font-serif">{item.name}</h2>
              <span className="text-2xl font-semibold text-[--gold]">${item.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600 mb-6">{item.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <p className="font-semibold text-gray-700">Quantity:</p>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-1 text-lg font-bold text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-[--gold] text-[--navy] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Add to Cart - ${(item.price * quantity).toFixed(2)}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuItemModal;
