import React from 'react';
import { featuredNews, events } from '../data/ecosystem';

export const Ecosystem = () => {
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
          {/* Featured News (Left) */}
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative h-[400px] rounded-xl overflow-hidden micro-shadow mb-6">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" 
                data-alt={featuredNews.imageAlt}
                style={{ backgroundImage: `url('${featuredNews.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-sm font-mono text-[10px] text-primary border border-primary/30 uppercase">
                  {featuredNews.category}
                </span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">
              {featuredNews.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              {featuredNews.description}
            </p>
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
