import React, { useState } from 'react';
import { menuData, MenuItem } from '../constants/menuData';
import MenuItemModal from './MenuItemModal';
import { motion } from 'framer-motion';

type Category = 'All' | 'Main_Course' | 'Signature_Dishes' | 'Salads' | 'Appetizers' | 'Sides' | 'Desserts';

const categories: { key: Category, name: string }[] = [
    { key: 'All', name: 'All' },
    { key: 'Signature_Dishes', name: 'Signature' },
    { key: 'Main_Course', name: 'Mains' },
    { key: 'Appetizers', name: 'Appetizers' },
    { key: 'Salads', name: 'Salads' },
    { key: 'Sides', name: 'Sides' },
    { key: 'Desserts', name: 'Desserts' },
];

const Menu: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

    const filteredMenu = selectedCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === selectedCategory);
    
    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[--navy] mb-12 font-serif">Our Menu</h2>
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                                selectedCategory === category.key 
                                ? 'bg-[--navy] text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMenu.map(item => (
                         <motion.div
                            layout
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className="bg-gray-50 rounded-lg shadow-md overflow-hidden cursor-pointer group"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative">
                                <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-[--navy]">{item.name}</h3>
                                    <span className="text-lg font-semibold text-[--gold] whitespace-nowrap">${item.price.toFixed(2)}</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {selectedItem && <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </section>
    );
};

export default Menu;
