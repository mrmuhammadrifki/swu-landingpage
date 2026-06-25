import React from 'react';

export const NeonButton = ({ children, href, className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`neon-gradient px-6 py-2.5 rounded-full font-label-caps text-label-caps text-white hover:opacity-90 transition-opacity micro-shadow hover-lift inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export const OutlineButton = ({ children, href, className = '', ...props }) => {
  return (
    <a
      href={href}
      className={`px-6 py-4 rounded-full border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center group glass-panel ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
