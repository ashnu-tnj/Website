import React from 'react';
import type { Service, ProcessStep, Stat, ContactInfo } from './types';

export const ICONS = {
    APP_DEV: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
    WEB_DEV: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>,
    AI_AUTOMATION: <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 8.25v10.5A2.25 2.25 0 006.75 21z" /></svg>,
    MENU: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>,
    CLOSE: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>,
    EMAIL: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
    LOCATION: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
    GLOBE: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12" /></svg>
};

export const SERVICES_DATA: Service[] = [
  {
    icon: <div className="text-champagne text-3xl">{ICONS.APP_DEV}</div>,
    title: "Custom App Development",
    description: "Sophisticated mobile applications for iOS and Android that deliver exceptional user experiences while maintaining the highest standards of performance and security.",
    features: [
      { text: "Native iOS & Android Solutions", color: "champagne" },
      { text: "Cross-Platform Excellence", color: "rose-gold" },
      { text: "Enterprise-Grade Security", color: "champagne" },
    ],
  },
  {
    icon: <div className="text-rose-gold text-3xl">{ICONS.WEB_DEV}</div>,
    title: "Luxury Web Experiences",
    description: "Meticulously crafted websites that embody sophistication and functionality, creating powerful digital presences that resonate with discerning audiences.",
    features: [
      { text: "Bespoke Design Systems", color: "rose-gold" },
      { text: "Performance Optimized", color: "champagne" },
      { text: "Seamless Integration", color: "rose-gold" },
    ],
  },
  {
    icon: <div className="text-platinum text-3xl">{ICONS.AI_AUTOMATION}</div>,
    title: "Intelligent Automation",
    description: "Refined AI solutions that streamline operations with elegance, providing intelligent insights and automation that enhance efficiency while maintaining sophistication.",
    features: [
      { text: "Process Intelligence", color: "platinum" },
      { text: "Predictive Analytics", color: "champagne" },
      { text: "Machine Learning Excellence", color: "platinum" },
    ],
  },
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: "Discovery & Strategy",
    description: "Comprehensive analysis of your vision, objectives, and market landscape to craft a strategic foundation for success.",
    borderColor: 'champagne'
  },
  {
    step: '02',
    title: "Design & Refinement",
    description: "Thoughtful design creation and iterative refinement to achieve the perfect balance of aesthetics and functionality.",
    borderColor: 'rose-gold'
  },
  {
    step: '03',
    title: "Development & Integration",
    description: "Precision development with meticulous attention to detail, ensuring seamless integration and flawless performance.",
    borderColor: 'platinum'
  },
  {
    step: '04',
    title: "Launch & Excellence",
    description: "Graceful deployment with ongoing optimization and dedicated support to maintain the highest standards.",
    borderColor: 'champagne'
  }
];

export const STATS_DATA: Stat[] = [
    { value: '50+', label: 'Projects' },
    { value: '5+', label: 'Years' },
    { value: '100%', label: 'Excellence' },
];

export const CONTACT_INFO_DATA: ContactInfo[] = [
  {
    icon: ICONS.EMAIL,
    label: 'Email',
    value: 'info@aflatus.com',
    href: 'mailto:info@aflatus.com'
  },
  {
    icon: ICONS.LOCATION,
    label: 'Location',
    value: 'Chennai, Tamil Nadu',
    subValue: 'India'
  },
  {
    icon: ICONS.GLOBE,
    label: 'Markets',
    value: 'Middle East Region',
    subValue: 'Premium Solutions'
  }
];