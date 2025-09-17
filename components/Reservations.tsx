import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Reservations: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., API call
        console.log('Reservation data:', formData);
        setIsSubmitted(true);
    };

    return (
        <section id="reservations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-[--navy] mb-12 font-serif">Make a Reservation</h2>
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    {isSubmitted ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
                            <p className="text-gray-700">Your reservation request has been received. We will contact you shortly to confirm.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                            <div>
                                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
                                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                             <div className="md:col-span-2">
                                <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
                                <input type="number" id="guests" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[--gold]" required />
                            </div>
                            <div className="md:col-span-2 text-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="bg-[--navy] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors"
                                >
                                    Book a Table
                                </motion.button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Reservations;
