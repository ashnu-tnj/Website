
import React, { useRef, useEffect, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let timer: number;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = window.setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timer) window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-1000 ${isVisible ? 'animate-elegant-reveal' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
