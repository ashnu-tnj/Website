
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-champagne/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="font-serif text-3xl font-bold luxury-text mb-6">aflatus</div>
          <div className="ornamental-divider w-32 mx-auto mb-6"></div>
          <p className="text-platinum/60 font-light mb-4">
            Engineering Digital Excellence
          </p>
          <p className="text-platinum/40 text-sm font-light">
            © {new Date().getFullYear()} aflatus. All rights reserved. | Crafted with precision in Chennai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
