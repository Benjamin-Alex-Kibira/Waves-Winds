import React, { useState } from 'react';
import { menuData, MenuItem } from '../constants/menuData';
import { motion } from 'framer-motion';
import MenuItemModal from './MenuItemModal';

// FIX: Correctly implemented the Menu component to display menu items, resolving multiple errors.
const categories = ['All', ...Array.from(new Set(menuData.map(item => item.category.replace('_', ' '))))];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredMenu = selectedCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category.replace('_', ' ') === selectedCategory);
  
  const handleItemClick = (item: MenuItem) => {
      setSelectedItem(item);
  };

  const handleCloseModal = () => {
      setSelectedItem(null);
  }

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[--navy] mb-12 font-serif">Our Menu</h2>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-[--navy] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-[--navy]/80 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => handleItemClick(item)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-xl text-[--navy] mb-2">{item.name}</h3>
                  <span className="text-lg font-semibold text-[--gold]">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedItem && (
          <MenuItemModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Menu;
