import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/30 full-width flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 max-w-7xl mx-auto">
        <div className="space-y-6 md:col-span-1">
          <span className="font-headline-md text-headline-md font-black text-primary dark:text-primary-fixed block">STMIK Widya Utama</span>
          <p className="text-on-surface-variant font-body-md text-sm pr-4">
            Architecting the Future.<br />
            The Digital Core of Purwokerto.
          </p>
          <div className="text-on-surface-variant font-body-md text-sm flex items-start gap-2">
            <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">location_on</span>
            <span>Jl. Sunan Kalijaga, Berkoh, Purwokerto Selatan, Indonesia.</span>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">Campus Hubs</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">S1 Informatika</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">D3 Teknik Informatika</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">D3 Komputerisasi Akuntansi</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Admissions</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">Resources</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Research Portal</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Industry Partners</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Career Center</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Alumni Network</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim">Legal &amp; Contact</h4>
          <ul className="space-y-3">
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-on-surface-variant font-body-md hover:text-secondary-container transition-all focus:ring-2 focus:ring-primary inline-block" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-body-md text-sm">© 2024 STMIK Widya Utama. Engineering the Future.</p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <a className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">share</span></a>
            <a className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" href="#"><span className="material-symbols-outlined text-[18px]">public</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
