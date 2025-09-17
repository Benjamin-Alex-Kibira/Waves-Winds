import React, { useState, useEffect } from 'react';

interface OrderTrackingProps {
  show: boolean;
  onClose: () => void;
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ show, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(oldProgress => {
          if (oldProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [show]);
  
  const getStatusMessage = () => {
    if (progress < 25) return "Order Placed. We've received your order.";
    if (progress < 50) return "Preparation. Our chefs are working on it!";
    if (progress < 75) return "Cooking. Getting hot and delicious!";
    if (progress < 100) return "Out for Delivery. Your meal is on its way!";
    return "Delivered! Enjoy your meal.";
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Track Your Order</h2>
        <p className="text-gray-600 mb-6">{getStatusMessage()}</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div className="bg-green-500 h-4 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
        <p className="font-bold text-lg">{Math.round(progress)}%</p>
        <button onClick={onClose} className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 font-semibold">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;
