import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-serif mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience the Taste of the Ocean
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fresh, sustainable seafood with a modern twist.
        </motion.p>
        <motion.a 
          href="#menu" 
          className="bg-[--gold] text-[--navy] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Our Menu
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
