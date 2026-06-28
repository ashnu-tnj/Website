import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';
import { CONTACT_INFO_DATA } from '../constants';
import type { ContactInfo } from '../types';

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

const inputClasses =
    "w-full px-6 py-4 bg-charcoal/50 border border-champagne/20 rounded-2xl text-pearl placeholder-platinum/50 font-light focus:outline-none focus:border-champagne/60 focus:ring-2 focus:ring-champagne/20 transition-all duration-300";
const labelClasses = "block text-platinum/60 text-sm mb-2 font-light tracking-wide";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status !== 'idle') return;

        const form = e.currentTarget;
        const data = new FormData(form);
        const name = (data.get('name') as string)?.trim() ?? '';
        const email = (data.get('email') as string)?.trim() ?? '';
        const company = (data.get('company') as string)?.trim() ?? '';
        const message = (data.get('message') as string)?.trim() ?? '';

        setStatus('sending');

        // No backend is connected, so hand the inquiry off via the user's email
        // client instead of silently discarding it.
        const subject = encodeURIComponent(`New inquiry from ${name || 'website visitor'}`);
        const body = encodeURIComponent(
            `Name: ${name}\nCompany: ${company || '—'}\nEmail: ${email}\n\n${message}`
        );

        window.setTimeout(() => {
            window.location.href = `mailto:info@aflatus.com?subject=${subject}&body=${body}`;
            setStatus('sent');
            window.setTimeout(() => {
                setStatus('idle');
                form.reset();
            }, 2500);
        }, 800);
    };

    const getButtonState = () => {
        switch (status) {
            case 'sending': return { text: 'Sending…', disabled: true, className: 'opacity-70 cursor-wait' };
            case 'sent': return { text: 'Thank You — Check Your Email', disabled: true, className: 'from-green-600 to-green-500' };
            case 'idle': return { text: 'Send Inquiry', disabled: false, className: '' };
        }
    };

    const buttonState = getButtonState();

    return (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="contact-name" className={labelClasses}>Your Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="Jane Doe" required autoComplete="name" className={inputClasses}/>
                </div>
                <div>
                    <label htmlFor="contact-company" className={labelClasses}>Company <span className="text-platinum/40">(optional)</span></label>
                    <input id="contact-company" name="company" type="text" placeholder="Acme Inc." autoComplete="organization" className={inputClasses}/>
                </div>
            </div>
            <div>
                <label htmlFor="contact-email" className={labelClasses}>Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" className={inputClasses}/>
            </div>
            <div>
                <label htmlFor="contact-message" className={labelClasses}>Tell us about your vision</label>
                <textarea id="contact-message" name="message" placeholder="A few words about your project…" required rows={5} className={`${inputClasses} resize-none`}></textarea>
            </div>
            <button type="submit" disabled={buttonState.disabled} className={`w-full text-obsidian font-medium py-4 px-8 rounded-2xl tracking-wide bg-gradient-to-r from-champagne to-yellow-600 transition-all duration-300 enabled:hover:scale-[1.02] enabled:hover:shadow-2xl enabled:hover:shadow-champagne/30 disabled:cursor-not-allowed ${buttonState.className}`}>
                {buttonState.text}
            </button>
            <p className="sr-only" role="status" aria-live="polite">
                {status === 'sending' ? 'Sending your inquiry' : status === 'sent' ? 'Inquiry ready in your email client' : ''}
            </p>
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
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Contact;