import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, GalleryImage } from '../constants/galleryImages';
import Modal from './Modal';

const Gallery: React.FC = () => {
    const [selectedImg, setSelectedImg] = useState<GalleryImage | null>(null);

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[--navy] mb-12 font-serif">Our Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                        <motion.div
                            key={image.id}
                            layoutId={image.src}
                            onClick={() => setSelectedImg(image)}
                            className="overflow-hidden rounded-lg cursor-pointer h-64 shadow-lg"
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <img src={image.src} alt={image.caption} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
