
import React from 'react';
import type { Service } from '../types';
import { SERVICES_DATA } from '../constants';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group bg-gradient-to-br from-charcoal to-slate p-8 md:p-10 rounded-3xl border border-champagne/15 transition-all duration-500 hover:border-champagne/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-champagne/20 to-rose-gold/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
        {service.icon}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-pearl mb-4 transition-colors duration-300 group-hover:text-champagne">
        {service.title}
      </h3>
      <p className="text-platinum/70 leading-relaxed mb-8 font-light">
        {service.description}
      </p>
      <div className="space-y-4">
        {service.features.map((feature, index) => (
          <div key={index} className="flex items-center text-sm">
            <div className={`w-1.5 h-1.5 rounded-full mr-4 ${feature.color === 'champagne' ? 'bg-champagne' : feature.color === 'rose-gold' ? 'bg-rose-gold' : 'bg-platinum'}`}></div>
            <span className="text-platinum/60 font-light">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-obsidian">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <SectionHeading
          tag="Our Expertise"
          title="Refined Solutions"
          description="We specialize in creating sophisticated digital experiences that transform businesses across the Middle East with elegance and precision."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-16">
          {SERVICES_DATA.map((service, index) => (
            <AnimatedElement key={service.title} delay={index * 200}>
              <ServiceCard service={service} />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
