import React from 'react';

const WaveDivider: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white"></div>
      <div style={{
          height: '150px',
          overflow: 'hidden',
          position: 'relative',
          background: '#f9fafb' // bg-gray-50
      }}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
              <path d="M-0.00,49.98 C150.00,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: 'none', fill: '#ffffff'}}></path>
          </svg>
      </div>
    </div>
  );
};

export default WaveDivider;
