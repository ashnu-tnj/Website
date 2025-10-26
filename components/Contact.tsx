
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import { SOCIAL_LINKS_DATA, CONTACT_INFO_DATA } from '../constants';
import type { SocialLink, ContactInfo } from '../types';

const ContactInfoItem: React.FC<{ item: ContactInfo }> = ({ item }) => (
  <div className="flex items-start group">
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-champagne/10 to-rose-gold/10 flex-shrink-0 flex items-center justify-center mr-6 transition-transform duration-300 group-hover:scale-105">
      <span className="text-champagne">{item.icon}</span>
    </div>
    <div>
      <p className="text-platinum/60 text-sm mb-1 font-light">{item.label}</p>
      {item.href ? (
        <a href={item.href} className="text-pearl hover:text-champagne transition-colors font-light">
          {item.value}
        </a>
      ) : (
        <p className="text-pearl font-light">{item.value}</p>
      )}
      {item.subValue && <p className="text-platinum/50 text-sm font-light">{item.subValue}</p>}
    </div>
  </div>
);

const SocialLinkItem: React.FC<{ link: SocialLink }> = ({ link }) => (
  <a href={link.url} className="w-10 h-10 rounded-xl bg-champagne/10 flex items-center justify-center text-champagne/70 hover:text-champagne hover:bg-champagne/20 transition-all duration-300">
    {link.icon}
  </a>
);

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setTimeout(() => {
                setStatus('idle');
                (e.target as HTMLFormElement).reset();
            }, 2500);
        }, 1500);
    };

    const getButtonState = () => {
        switch (status) {
            case 'sending': return { text: 'Sending...', disabled: true, className: 'opacity-70' };
            case 'sent': return { text: 'Sent Successfully', disabled: true, className: 'bg-green-600' };
            case 'idle': return { text: 'Send Inquiry', disabled: false, className: '' };
        }
    };

    const buttonState = getButtonState();

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" required className="w-full px-6 py-4 bg-charcoal/50 border border-champagne/20 rounded-2xl text-pearl placeholder-platinum/50 font-light focus:outline-none focus:border-champagne/60 focus:ring-2 focus:ring-champagne/20 transition-all duration-300"/>
                <input type="text" placeholder="Company" className="w-full px-6 py-4 bg-charcoal/50 border border-champagne/20 rounded-2xl text-pearl placeholder-platinum/50 font-light focus:outline-none focus:border-champagne/60 focus:ring-2 focus:ring-champagne/20 transition-all duration-300"/>
            </div>
            <input type="email" placeholder="Email Address" required className="w-full px-6 py-4 bg-charcoal/50 border border-champagne/20 rounded-2xl text-pearl placeholder-platinum/50 font-light focus:outline-none focus:border-champagne/60 focus:ring-2 focus:ring-champagne/20 transition-all duration-300"/>
            <textarea placeholder="Tell us about your vision" required rows={5} className="w-full px-6 py-4 bg-charcoal/50 border border-champagne/20 rounded-2xl text-pearl placeholder-platinum/50 resize-none font-light focus:outline-none focus:border-champagne/60 focus:ring-2 focus:ring-champagne/20 transition-all duration-300"></textarea>
            <button type="submit" disabled={buttonState.disabled} className={`w-full text-obsidian font-medium py-4 px-8 rounded-2xl tracking-wide bg-gradient-to-r from-champagne to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-champagne/30 ${buttonState.className}`}>
                {buttonState.text}
            </button>
        </form>
    );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative elegant-pattern">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <SectionHeading
          tag="Let's Collaborate"
          title="Begin Your Journey"
          description="Transform your vision into reality with our sophisticated digital solutions."
        />
        <AnimatedElement className="text-center">
            <p className="text-champagne/80 font-light tracking-wide -mt-4">
                Based in Chennai, India • Serving the Middle East
            </p>
        </AnimatedElement>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
          <AnimatedElement>
            <ContactForm />
          </AnimatedElement>
          
          <AnimatedElement delay={300}>
            <div className="bg-charcoal/70 backdrop-blur-md border border-champagne/15 p-8 md:p-10 rounded-3xl">
              <h3 className="font-serif text-2xl font-semibold luxury-text mb-8">
                Connect With Us
              </h3>
              <div className="space-y-8">
                {CONTACT_INFO_DATA.map(item => <ContactInfoItem key={item.label} item={item} />)}
              </div>
              <div className="flex space-x-4 mt-12 pt-8 border-t border-champagne/10">
                {SOCIAL_LINKS_DATA.map((link, index) => <SocialLinkItem key={index} link={link} />)}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;
