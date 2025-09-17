import React, { useState, useEffect } from 'react';
// FIX: Corrected import paths for all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureHighlight from './components/SignatureHighlight';
import About from './components/About';
import WaveDivider from './components/WaveDivider';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reservations from './components/Reservations';
import Takeout from './components/Takeout';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import LoadingScreen from './components/LoadingScreen';
import { CartProvider, useCart } from './contexts/CartContext';
import CartModal from './components/CartModal';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';

const AppContent: React.FC = () => {
  const [showOrderTracking, setShowOrderTracking] = useState(false);
  const { closeCheckout } = useCart();

  const handleOrderPlaced = () => {
    closeCheckout();
    setShowOrderTracking(true);
  };
  
  const handleCloseTracking = () => {
    setShowOrderTracking(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SignatureHighlight />
        <About />
        <WaveDivider />
        <Menu />
        <Testimonials />
        <Gallery />
        <Takeout />
        <Reservations />
      </main>
      <Footer />
      <FloatingCTA />
      <CartModal />
      <Checkout onOrderPlaced={handleOrderPlaced} />
      <OrderTracking show={showOrderTracking} onClose={handleCloseTracking} />
    </>
  );
};


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      {loading ? (
        <LoadingScreen />
      ) : (
        <AppContent />
      )}
    </CartProvider>
  );
};

export default App;