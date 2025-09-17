import React from 'react';

const Takeout: React.FC = () => {
    return (
        <section id="takeout" className="py-20 bg-[--navy] text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 font-serif">Enjoy Our Dishes at Home</h2>
                <p className="text-lg text-[--beige] mb-8 max-w-2xl mx-auto">
                    Craving our signature flavors but want to stay in? Our takeout service brings the best of Waves & Winds directly to you.
                </p>
                <a 
                    href="#menu"
                    className="bg-[--gold] text-[--navy] font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors text-lg"
                >
                    Order Now
                </a>
            </div>
        </section>
    );
};

export default Takeout;
