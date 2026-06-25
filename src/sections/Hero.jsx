import React, { useState, useEffect } from 'react';
import { NeonButton, OutlineButton } from '../components/Button';

const NeuralNetCompiler = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    let timer;
    let state = 'compiling'; // 'compiling' -> 'success' -> 'initializing'

    const runSimulation = () => {
      if (state === 'compiling') {
        setProgress((prev) => {
          if (prev >= 100) {
            state = 'success';
            setStatus('Compilation Success!');
            timer = setTimeout(() => {
              state = 'initializing';
              setStatus('Initializing next batch...');
              setProgress(0);
              timer = setTimeout(() => {
                state = 'compiling';
                setStatus('Batch processing...');
              }, 1500);
            }, 3000);
            return 100;
          }
          
          const increment = Math.floor(Math.random() * 12) + 4;
          const nextVal = Math.min(prev + increment, 100);
          setStatus(`Batch processing... ${nextVal}%`);
          return nextVal;
        });
        
        const randomDelay = Math.floor(Math.random() * 400) + 200;
        timer = setTimeout(runSimulation, randomDelay);
      } else {
        timer = setTimeout(runSimulation, 500);
      }
    };

    setStatus('Batch processing... 0%');
    timer = setTimeout(runSimulation, 500);

    return () => clearTimeout(timer);
  }, []);

  const isSuccess = progress === 100;

  return (
    <div className="absolute bottom-4 left-4 sm:bottom-12 sm:left-8 glass-panel p-3 sm:p-4 rounded-lg w-52 sm:w-64 animate-float-panel-2 border border-outline-variant/10">
      <div className="flex items-center gap-2 sm:gap-3">
        <span 
          className={`material-symbols-outlined text-xl sm:text-2xl transition-all duration-300 ${
            isSuccess ? 'text-green-400 scale-110 animate-pulse' : 'text-secondary animate-spin'
          }`}
          style={{ animationDuration: isSuccess ? '1.5s' : '6s' }}
        >
          {isSuccess ? 'verified' : 'account_tree'}
        </span>
        <div>
          <div className="text-[10px] sm:text-[12px] text-on-surface font-semibold font-mono">Neural Net Compiling</div>
          <div className={`text-[9px] sm:text-[10px] transition-colors duration-300 font-mono ${isSuccess ? 'text-green-400 font-bold' : 'text-on-surface-variant'}`}>
            {status}
          </div>
        </div>
      </div>
      <div className="w-full bg-surface-container-high h-1 mt-2 sm:mt-3 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${
            isSuccess ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-secondary'
          }`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
      {/* Abstract Structural Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-glow-1"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-glow-2"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-5 lg:col-start-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-outline-variant/30 bg-surface-container-high/50 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-secondary">Tech Core Active</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-on-surface">
            Architecting the Future of <span className="text-gradient">Digital Innovation</span> &amp; Technopreneurship.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            STMIK Widya Utama is the digital core of Purwokerto, pioneering IT-focused higher education in Indonesia through immersive tech environments and industry-aligned curriculums.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <NeonButton href="#" className="px-8 py-4">
              Explore Programs
              <span className="material-symbols-outlined text-[18px] ml-2">arrow_forward</span>
            </NeonButton>
            <OutlineButton href="#" className="px-6 py-4">
              <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform mr-2">view_in_ar</span>
              <span className="font-label-caps text-label-caps">Virtual Campus Tour</span>
            </OutlineButton>
          </div>
        </div>
        {/* Right Mockup */}
        <div className="lg:col-span-6 lg:col-start-7 lg:translate-x-asymmetric-offset relative animate-float-dashboard">
          <div className="glass-panel rounded-xl border border-outline-variant/20 p-2 overflow-hidden micro-shadow group relative">
            {/* Faux Browser/Dashboard Window */}
            <div className="bg-surface-container-highest rounded-t-lg px-4 py-3 border-b border-outline-variant/20 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error-container"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
              <div className="ml-4 flex-1 h-4 bg-surface-container-low rounded-sm opacity-50"></div>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] bg-surface-container-lowest rounded-b-lg overflow-hidden flex">
              {/* Sidebar */}
              <div className="w-16 md:w-48 border-r border-outline-variant/20 p-4 space-y-4 hidden sm:block">
                <div className="h-4 bg-surface-container-high rounded-sm w-full mb-8"></div>
                <div className="h-4 bg-surface-container-high rounded-sm w-3/4"></div>
                <div className="h-4 bg-surface-container-high rounded-sm w-5/6"></div>
                <div className="h-4 bg-surface-container-high rounded-sm w-2/3"></div>
                <div className="h-4 bg-primary-container/20 rounded-sm w-full mt-12 border border-primary/30"></div>
              </div>
              {/* Main Canvas Area */}
              <div className="flex-1 p-6 relative cyber-grid scanline-effect">
                {/* Background Image representing technical workspace */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" 
                  data-alt="A highly detailed top-down view of a modern cyber-security and data science monitoring dashboard displayed on a large curved glass monitor. The screen displays complex glowing data nodes, intersecting technical blueprints, and streams of code in a dark mode interface. Accentuated by vibrant neon cyan and deep blue glows against a dark matte background. The aesthetic is ultra-modern, technical, high-performance computing environment with sharp geometric vectors and precise typography." 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk0iVKa6EXmti7XxwlbFgy84TNp8SM4ex4sUgvD6h4OdXJHvAje36Y_VPtb5bLLR1nn4-8UWF1UACgM9w9PfWkRg34In1HhsEp7vTeiS4O64ENMRy4mcQ3GgjSzhWETNCd2aF2DHxQA8S84TyYxcgkpXFhMQcsDr_GcrDmzChkoYEhxM7AyPyIsLPnw1qqbUc5MDIbPLrg0GlwMxaNe9kSmZPMUH2YTg5l8ZIUi9OGDTvd20bYvN4fXEDz9QCN_MDd4udKYPURVtc-')" }}
                ></div>
                
                {/* Floating Data Elements */}
                <div className="absolute top-4 right-4 sm:top-8 sm:right-8 glass-panel p-3 sm:p-4 rounded-lg w-40 sm:w-48 space-y-2 sm:space-y-3 animate-float-panel-1">
                  <div className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider font-mono">System Load</div>
                  <div className="flex items-end gap-1 h-8 sm:h-12">
                    <div className="w-1/4 bg-primary rounded-t-sm animate-bar-1" style={{ height: '40%' }}></div>
                    <div className="w-1/4 bg-primary rounded-t-sm animate-bar-2" style={{ height: '70%' }}></div>
                    <div className="w-1/4 bg-secondary rounded-t-sm animate-bar-3" style={{ height: '100%' }}></div>
                    <div className="w-1/4 bg-primary rounded-t-sm animate-bar-4" style={{ height: '60%' }}></div>
                  </div>
                </div>
                <NeuralNetCompiler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
