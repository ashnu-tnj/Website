import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: { text: string; color: 'champagne' | 'rose-gold' | 'platinum' }[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  borderColor: 'champagne' | 'rose-gold' | 'platinum';
}

export interface Stat {
  value: string;
  label: string;
}

export interface ContactInfo {
    icon: React.ReactNode;
    label: string;
    value: string;
    subValue?: string;
    href?: string;
}