
import React from 'react';
import AnimatedElement from './AnimatedElement';

interface SectionHeadingProps {
  tag: string;
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ tag, title, description }) => {
  return (
    <AnimatedElement className="text-center mb-16 md:mb-20">
        <div className="ornamental-divider w-24 mx-auto mb-8"></div>
        <span className="text-champagne uppercase tracking-[0.3em] text-sm font-medium mb-6 block">{tag}</span>
        <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8 luxury-text">
            {title}
        </h2>
        <p className="text-xl text-platinum/70 max-w-3xl mx-auto leading-relaxed font-light">
            {description}
        </p>
        <div className="ornamental-divider w-16 mx-auto mt-8"></div>
    </AnimatedElement>
  );
};

export default SectionHeading;
