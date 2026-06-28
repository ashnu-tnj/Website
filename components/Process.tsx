
import React from 'react';
import type { ProcessStep } from '../types';
import { PROCESS_DATA } from '../constants';
import SectionHeading from './SectionHeading';
import AnimatedElement from './AnimatedElement';

// Static class maps so Tailwind can detect these utilities at build time.
// (Interpolating color names into class strings at runtime is not reliably
// picked up by Tailwind's JIT engine and can leave the borders/lines unstyled.)
const BORDER_CLASSES: Record<ProcessStep['borderColor'], string> = {
    champagne: 'border-champagne/30 group-hover:border-champagne/60',
    'rose-gold': 'border-rose-gold/30 group-hover:border-rose-gold/60',
    platinum: 'border-platinum/30 group-hover:border-platinum/60',
};

const LINE_CLASSES: Record<ProcessStep['borderColor'], string> = {
    champagne: 'from-champagne/30 to-transparent',
    'rose-gold': 'from-rose-gold/30 to-transparent',
    platinum: 'from-platinum/30 to-transparent',
};

const ProcessStepCard: React.FC<{ step: ProcessStep, isLast: boolean }> = ({ step, isLast }) => {
    const borderColorClass = BORDER_CLASSES[step.borderColor];
    const lineGradientClass = LINE_CLASSES[step.borderColor];

    return (
        <div className="text-center group relative">
            <div className="relative mb-8 flex flex-col items-center">
                <div className={`w-20 h-20 mx-auto rounded-full border-2 ${borderColorClass} flex items-center justify-center transition-colors duration-500 mb-6`}>
                    <span className="font-serif text-2xl text-champagne italic">{step.step}</span>
                </div>
                {/* Horizontal Connecting Line for large screens */}
                {!isLast && <div className={`hidden lg:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r ${lineGradientClass}`}></div>}
                {/* Vertical Connecting Line for small screens */}
                {!isLast && <div className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-champagne/30 to-transparent"></div>}
            </div>
            <h3 className="font-serif text-xl font-semibold text-pearl mb-4 transition-colors duration-300 group-hover:text-champagne">
                {step.title}
            </h3>
            <p className="text-platinum/60 text-sm leading-relaxed font-light px-4">
                {step.description}
            </p>
        </div>
    );
};

const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 md:py-32 relative bg-gradient-to-b from-charcoal via-obsidian to-charcoal">
            <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
                <SectionHeading
                    tag="Our Approach"
                    title="Refined Process"
                    description="A meticulously designed methodology that ensures exceptional results through careful attention to detail and unwavering commitment to excellence."
                />
                <div className="grid lg:grid-cols-4 gap-y-16 lg:gap-8 mt-20">
                    {PROCESS_DATA.map((step, index) => (
                        <AnimatedElement key={step.step} delay={index * 200}>
                            <ProcessStepCard step={step} isLast={index === PROCESS_DATA.length - 1} />
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
