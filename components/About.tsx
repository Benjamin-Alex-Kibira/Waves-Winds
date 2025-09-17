import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Restaurant Interior" className="rounded-lg shadow-xl w-full" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[--navy] mb-4 font-serif">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              "Waves & Winds" was born from a love for the sea and its bounties. Our mission is to provide a unique dining experience that combines the freshest, sustainably-sourced seafood with innovative culinary techniques.
            </p>
            <p className="text-lg text-gray-600">
              Nestled by the coast, our restaurant offers breathtaking views and a serene ambiance, making it the perfect setting for any occasion. Join us for a journey of flavors that will delight your senses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
