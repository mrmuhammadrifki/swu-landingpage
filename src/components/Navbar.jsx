import React, { useState } from 'react';
import { navLinks } from '../data/navigation';
import { NeonButton } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 mx-auto max-w-7xl h-16 md:h-20">
        {/* Logo Area */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <div className="h-8 w-8 md:h-10 md:w-10 flex items-center justify-center">
            <img 
              className="h-full w-full object-contain" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvwzdh59nu7B0M3KOmiBWliiLCktP8NevTrKcFDobwYpRyWapX8TboeBud7Iq06_23oejaJlIwJJcZmxb_WrmsEXQJ-Slza1g1BpgW701CeB_39RMCHUjT-18eZLrhEXwjg-dSMStnq0slc8lJRttncSg_BRjpGX371tkQ-luEi2IWzUfKqKgI68ER84ZIGdAdUjQwONMLBd46K2Ll0A8KA4oHMG8Gv9kL3FfVuLpM7h0E3tm2By2YJJ_fm" 
              alt="STMIK Widya Utama Logo" 
            />
          </div>
          <span className="font-headline-md text-[18px] md:text-[20px] font-bold text-on-surface whitespace-nowrap">STMIK Widya Utama</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors" href="#">SIAKAD</a>
          <NeonButton href="#">Join Admission 2026/2027</NeonButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface hover:text-primary hover:border-primary transition-all focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-outline-variant/10 ${
          isOpen ? 'max-h-96 opacity-100 py-6 px-6 bg-surface/95 backdrop-blur-lg' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant hover:text-primary font-body-md py-2 border-b border-outline-variant/5 transition-colors" 
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a 
              onClick={() => setIsOpen(false)}
              className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors py-2 text-center sm:text-left" 
              href="#"
            >
              SIAKAD
            </a>
            <NeonButton href="#" className="w-full text-center" onClick={() => setIsOpen(false)}>
              Join Admission 2026/2027
            </NeonButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
