import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[--navy] text-[--beige] py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold font-serif text-white mb-4">Waves & Winds</h3>
            <p className="text-sm">Experience the finest seafood with breathtaking ocean views.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#about" className="hover:text-[--gold]">About</a></li>
              <li className="mb-2"><a href="#menu" className="hover:text-[--gold]">Menu</a></li>
              <li className="mb-2"><a href="#reservations" className="hover:text-[--gold]">Reservations</a></li>
              <li className="mb-2"><a href="#gallery" className="hover:text-[--gold]">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <p className="mb-2">123 Ocean Drive, Seaside, FL 12345</p>
            <p className="mb-2">Email: contact@wavesandwinds.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-[--beige]/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Waves & Winds. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
