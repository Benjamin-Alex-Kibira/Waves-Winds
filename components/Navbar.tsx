import React, { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, openCart, itemAdded } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-[--navy] shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-white font-serif">Waves & Winds</div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#about" className="text-[--beige] hover:text-[--gold]">About</a>
                        <a href="#menu" className="text-[--beige] hover:text-[--gold]">Menu</a>
                        <a href="#reservations" className="text-[--beige] hover:text-[--gold]">Reservations</a>
                        <a href="#gallery" className="text-[--beige] hover:text-[--gold]">Gallery</a>
                         <a href="#takeout" className="text-[--beige] hover:text-[--gold]">Takeout</a>
                    </div>
                    <div className="flex items-center">
                        <motion.button 
                            onClick={openCart} 
                            className="relative text-[--beige] hover:text-[--gold] mr-4"
                            animate={{ scale: itemAdded ? [1, 1.3, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-[--gold] text-[--navy] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>}
                        </motion.button>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-[--beige] focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4 bg-[--navy] rounded-lg p-4">
                        <a href="#about" className="block py-2 text-[--beige] hover:bg-white/10 rounded">About</a>
                        <a href="#menu" className="block py-2 text-[--beige] hover:bg-white/10 rounded">Menu</a>
                        <a href="#reservations" className="block py-2 text-[--beige] hover:bg-white/10 rounded">Reservations</a>
                        <a href="#gallery" className="block py-2 text-[--beige] hover:bg-white/10 rounded">Gallery</a>
                        <a href="#takeout" className="block py-2 text-[--beige] hover:bg-white/10 rounded">Takeout</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
