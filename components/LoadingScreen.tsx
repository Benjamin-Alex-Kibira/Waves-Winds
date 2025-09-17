import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[--navy] flex flex-col justify-center items-center z-[100]">
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
        className="w-24 h-24 bg-[--gold]"
      />
      <h1 className="text-4xl font-bold text-white font-serif mt-8">Waves & Winds</h1>
    </div>
  );
};

export default LoadingScreen;
