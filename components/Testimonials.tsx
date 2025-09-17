import React from 'react';

const testimonials = [
    {
        quote: "An unforgettable dining experience! The 'Waves & Winds' Platter was a masterpiece. The ambiance and service were top-notch.",
        author: "Jessica M.",
        location: "New York"
    },
    {
        quote: "The best seafood I've had in years. Everything was so fresh and perfectly cooked. We'll definitely be back!",
        author: "David L.",
        location: "Florida"
    },
    {
        quote: "A beautiful restaurant with a stunning view. The cocktails were creative and delicious. Perfect for a special occasion.",
        author: "Sarah P.",
        location: "California"
    }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[--navy] mb-12 font-serif">What Our Guests Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-[--navy]">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
