import React from 'react';
import { faculties } from '../data/faculties';

const FacultyCard = ({ title, tags, curriculumHref, image, imageAlt, translateClass }) => {
  return (
    <div 
      className={`group relative rounded-xl overflow-hidden bg-surface-container-highest micro-shadow h-[400px] flex flex-col justify-end transition-all duration-500 border-2 border-transparent hover:border-primary hover:scale-[1.02] ${translateClass}`}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 opacity-60 group-hover:scale-105 group-hover:opacity-75"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="relative z-10 p-6 space-y-4 glass-panel border-t-0 border-x-0 border-b-2 border-transparent group-hover:border-primary transition-colors">
        <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 rounded-sm font-mono text-[10px] border bg-surface-container/80 text-on-surface-variant border-outline-variant/30 group-hover:border-primary/40 group-hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <a className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps pt-2 group-hover:text-primary transition-colors" href={curriculumHref}>
          View Curriculum Architecture <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
        </a>
      </div>
    </div>
  );
};

export const Faculties = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Academic Faculties</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Engineered curriculums designed to output industry-ready technical specialists and visionary technopreneurs.</p>
        </div>
        
        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faculties.map((faculty, idx) => (
            <FacultyCard 
              key={idx} 
              {...faculty} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
