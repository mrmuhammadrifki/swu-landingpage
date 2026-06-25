import React from 'react';
import { navLinks } from '../data/navigation';
import { NeonButton } from './Button';

export const Navbar = () => {
  return (
    <nav className="docked full-width top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 shadow-sm">
      <div className="flex justify-between items-center w-full px-8 md:px-12 py-4 mx-auto max-w-7xl h-16 md:h-20">
        {/* Logo Area */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="h-10 w-10 flex items-center justify-center">
            <img 
              className="h-full w-full object-contain" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLvwzdh59nu7B0M3KOmiBWliiLCktP8NevTrKcFDobwYpRyWapX8TboeBud7Iq06_23oejaJlIwJJcZmxb_WrmsEXQJ-Slza1g1BpgW701CeB_39RMCHUjT-18eZLrhEXwjg-dSMStnq0slc8lJRttncSg_BRjpGX371tkQ-luEi2IWzUfKqKgI68ER84ZIGdAdUjQwONMLBd46K2Ll0A8KA4oHMG8Gv9kL3FfVuLpM7h0E3tm2By2YJJ_fm" 
              alt="STMIK Widya Utama Logo" 
            />
          </div>
          <span className="font-headline-md text-[20px] font-bold text-on-surface whitespace-nowrap">STMIK Widya Utama</span>
        </div>

        {/* Navigation Links */}
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

        {/* Action Buttons */}
        <div className="flex items-center gap-6 shrink-0">
          <a className="hidden md:inline-block font-label-caps text-label-caps text-secondary hover:text-primary transition-colors" href="#">SIAKAD</a>
          <NeonButton href="#">Join Admission 2026/2027</NeonButton>
        </div>
      </div>
    </nav>
  );
};
