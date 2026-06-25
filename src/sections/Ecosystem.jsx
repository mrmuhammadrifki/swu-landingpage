import React, { useState, useEffect, useRef } from 'react';
import { featuredNewsList, events } from '../data/ecosystem';

export const Ecosystem = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimer = useRef(null);

  // Auto Play setup
  useEffect(() => {
    if (isHovered) {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      return;
    }

    autoPlayTimer.current = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % featuredNewsList.length);
    }, 5000);

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isHovered]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev - 1 + featuredNewsList.length) % featuredNewsList.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSlideIdx((prev) => (prev + 1) % featuredNewsList.length);
  };

  const currentSlide = featuredNewsList[slideIdx];

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Ecosystem Engine</h2>
          <a className="font-label-caps text-label-caps text-primary hover:text-secondary transition-colors inline-flex items-center gap-1" href="#">
            View All Activity 
            <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured News Slider (Left) */}
          <div 
            className="lg:col-span-7 flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden micro-shadow mb-6 group cursor-pointer border border-outline-variant/10">
              
              {/* Slides Container */}
              {featuredNewsList.map((news, idx) => (
                <div
                  key={news.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === slideIdx 
                      ? 'opacity-100 scale-100 pointer-events-auto' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:scale-105 transition-transform duration-700" 
                    data-alt={news.imageAlt}
                    style={{ backgroundImage: `url('${news.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-sm font-mono text-[10px] text-primary border border-primary/30 uppercase">
                      {news.category}
                    </span>
                  </div>
                </div>
              ))}

              {/* Slider Arrow Buttons (Hidden by default, shown on hover) */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface hover:text-primary border border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:scale-110"
                aria-label="Previous Slide"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-on-surface hover:text-primary border border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:scale-110"
                aria-label="Next Slide"
              >
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                {featuredNewsList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setSlideIdx(idx); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === slideIdx 
                        ? 'bg-primary w-5' 
                        : 'bg-on-surface/40 hover:bg-on-surface/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            
            {/* Slide Metadata */}
            <div className="min-h-[120px] group cursor-pointer">
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                {currentSlide.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
                {currentSlide.description}
              </p>
            </div>
          </div>

          {/* Events List (Right) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            {events.map((event, idx) => (
              <a 
                key={idx} 
                className="group flex gap-6 items-center p-4 rounded-lg hover:bg-surface-container-high/50 transition-colors border border-transparent hover:border-outline-variant/20" 
                href={event.href}
              >
                <div className="shrink-0 w-16 h-16 rounded-md bg-surface-container flex flex-col items-center justify-center border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-secondary">{event.month}</span>
                  <span className="font-headline-md text-headline-md text-on-surface leading-none mt-1">{event.day}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">
                    {event.category}
                  </span>
                  <h4 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
                    {event.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
