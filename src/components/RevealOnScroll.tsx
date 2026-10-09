import React, { useEffect, useRef, useState, ReactNode } from 'react';

export type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'scale-up' 
  | 'fade';

interface RevealOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  threshold?: number;
  className?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
  once = true,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once]);

  const getInitialStyle = (): React.CSSProperties => {
    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 32px, 0)'
        };
      case 'fade-down':
        return {
          opacity: 0,
          transform: 'translate3d(0, -32px, 0)'
        };
      case 'fade-left':
        return {
          opacity: 0,
          transform: 'translate3d(-32px, 0, 0)'
        };
      case 'fade-right':
        return {
          opacity: 0,
          transform: 'translate3d(32px, 0, 0)'
        };
      case 'zoom-in':
        return {
          opacity: 0,
          transform: 'scale3d(0.93, 0.93, 1)'
        };
      case 'scale-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0) scale3d(0.96, 0.96, 1)'
        };
      case 'fade':
      default:
        return {
          opacity: 0,
          transform: 'none'
        };
    }
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
  };

  const combinedStyle: React.CSSProperties = {
    ...(isVisible ? visibleStyle : getInitialStyle()),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style
  };

  return (
    <div
      ref={domRef}
      className={`reveal-wrapper ${isVisible ? 'reveal-active' : ''} ${className}`}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
