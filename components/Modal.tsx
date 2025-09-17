import React from 'react';
import { motion } from 'framer-motion';
// FIX: Corrected import path
import { GalleryImage } from '../constants/galleryImages';

interface ModalProps {
  selectedImg: GalleryImage;
  setSelectedImg: (img: GalleryImage | null) => void;
}

const Modal: React.FC<ModalProps> = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/80 flex justify-center items-center z-50 backdrop p-4"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <motion.div 
            className="relative"
            layoutId={selectedImg.src}
            initial={{ y: "-50px" }}
            animate={{ y: "0" }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <img
                src={selectedImg.src}
                alt={selectedImg.caption}
                className="max-w-[90vw] max-h-[80vh] block shadow-2xl rounded-lg object-contain"
                loading="lazy"
                decoding="async"
            />
            {selectedImg.caption && (
                <figcaption className="absolute bottom-0 w-full bg-black/60 text-white text-center p-2 rounded-b-lg text-sm">
                    {selectedImg.caption}
                </figcaption>
            )}
        </motion.div>
    </motion.div>
  );
};

export default Modal;
