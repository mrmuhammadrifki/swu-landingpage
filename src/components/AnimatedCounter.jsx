import React, { useState, useEffect, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) {
      const numericPart = value.match(/\d+/);
      if (numericPart) {
        setDisplayValue(`0${value.replace(numericPart[0], '')}`);
      } else {
        setDisplayValue(value);
      }
      return;
    }

    const numericPart = value.match(/\d+/);
    if (!numericPart) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(numericPart[0], 10);
    const suffix = value.replace(numericPart[0], '');
    const startTime = performance.now();

    let animationFrameId;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);

      setDisplayValue(`${currentVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, hasStarted]);

  return <span ref={elementRef}>{displayValue}</span>;
};
