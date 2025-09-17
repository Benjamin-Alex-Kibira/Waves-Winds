import React from 'react';
import { menuData } from '../constants/menuData';
import { motion } from 'framer-motion';

const SignatureHighlight: React.FC = () => {
  const signatureDishes = menuData.filter(item => item.category === 'Signature_Dishes').slice(0, 3);

  return (
    <section id="signature" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[--navy] mb-2 font-serif">Our Signature Dishes</h2>
        <p className="text-lg text-gray-600 mb-12">Crafted with passion by our world-class chefs.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div 
              key={dish.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={dish.image} alt={dish.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="font-bold text-xl text-[--navy] mb-2">{dish.name}</h3>
                <p className="text-gray-700 text-base mb-4">{dish.description}</p>
                <span className="text-lg font-semibold text-[--gold]">${dish.price.toFixed(2)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureHighlight;
