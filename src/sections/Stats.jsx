import React from 'react';
import { stats } from '../data/stats';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Stats = () => {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-highest border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 p-4">
              <div className={`font-headline-lg text-headline-lg font-black ${stat.isAccent ? 'text-secondary' : 'text-gradient'}`}>
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
