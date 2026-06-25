import React from 'react'
import './App.css'

function App() {
  return (
    <>
      {/* TopNavBar */}
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
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Academics</a>
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Research</a>
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Technopreneur Hub</a>
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300" href="#">Campus Life</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-6 shrink-0">
            <a className="hidden md:inline-block font-label-caps text-label-caps text-secondary hover:text-primary transition-colors" href="#">SIAKAD</a>
            <a className="neon-gradient px-6 py-2.5 rounded-full font-label-caps text-label-caps text-white hover:opacity-90 transition-opacity micro-shadow hover-lift" href="#">Join Admission 2026/2027</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Abstract Structural Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
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
              <a className="neon-gradient px-8 py-4 rounded-full font-label-caps text-label-caps text-white hover:opacity-90 transition-opacity micro-shadow flex items-center gap-2 hover-lift" href="#">
                Explore Programs
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a className="px-6 py-4 rounded-full border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary transition-all flex items-center gap-2 group glass-panel" href="#">
                <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">view_in_ar</span>
                <span className="font-label-caps text-label-caps">Virtual Campus Tour</span>
              </a>
            </div>
          </div>
          {/* Right Mockup */}
          <div className="lg:col-span-6 lg:col-start-7 lg:translate-x-asymmetric-offset relative">
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
                <div className="flex-1 p-6 relative">
                  {/* Background Image representing technical workspace */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen" 
                    data-alt="A highly detailed top-down view of a modern cyber-security and data science monitoring dashboard displayed on a large curved glass monitor. The screen displays complex glowing data nodes, intersecting technical blueprints, and streams of code in a dark mode interface. Accentuated by vibrant neon cyan and deep blue glows against a dark matte background. The aesthetic is ultra-modern, technical, high-performance computing environment with sharp geometric vectors and precise typography." 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk0iVKa6EXmti7XxwlbFgy84TNp8SM4ex4sUgvD6h4OdXJHvAje36Y_VPtb5bLLR1nn4-8UWF1UACgM9w9PfWkRg34In1HhsEp7vTeiS4O64ENMRy4mcQ3GgjSzhWETNCd2aF2DHxQA8S84TyYxcgkpXFhMQcsDr_GcrDmzChkoYEhxM7AyPyIsLPnw1qqbUc5MDIbPLrg0GlwMxaNe9kSmZPMUH2YTg5l8ZIUi9OGDTvd20bYvN4fXEDz9QCN_MDd4udKYPURVtc-')" }}
                  ></div>
                  {/* Floating Data Elements */}
                  <div className="absolute top-8 right-8 glass-panel p-4 rounded-lg w-48 space-y-3 transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-wider font-mono">System Load</div>
                    <div className="flex items-end gap-1 h-12">
                      <div className="w-1/4 bg-primary rounded-t-sm" style={{ height: '40%' }}></div>
                      <div className="w-1/4 bg-primary rounded-t-sm" style={{ height: '70%' }}></div>
                      <div className="w-1/4 bg-secondary rounded-t-sm" style={{ height: '100%' }}></div>
                      <div className="w-1/4 bg-primary rounded-t-sm" style={{ height: '60%' }}></div>
                    </div>
                  </div>
                  <div className="absolute bottom-12 left-8 glass-panel p-4 rounded-lg w-64 transform translate-y-2 group-hover:translate-y-4 transition-transform duration-1000 delay-100">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">account_tree</span>
                      <div>
                        <div className="text-[12px] text-on-surface font-semibold font-mono">Neural Net Compiling</div>
                        <div className="text-[10px] text-on-surface-variant">Batch processing... 89%</div>
                      </div>
                    </div>
                    <div className="w-full bg-surface-container-high h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triple-Tier Academic Faculty Discovery */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Academic Faculties</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Engineered curriculums designed to output industry-ready technical specialists and visionary technopreneurs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container-highest micro-shadow h-[400px] flex flex-col justify-end">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" 
                data-alt="A stylized, high-contrast abstract visualization of artificial intelligence and software engineering. Bright glowing code structures and neural network nodes overlay a deep indigo and dark slate background. The image is clean, corporate-tech, lacking human subjects, focusing purely on digital infrastructure and data flow with a glassmorphic aesthetic." 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXiZLAAKOTYxLJb2tKs3gyDZEj7861AwsriY_Q04fdFN4ZIgZ61lInKQCrk0OYwHeznHknQp95_uxPJUGPN8hwhGDTnA6oJGuoOypQmc4qSfSGtHrw8CuhJN8KKoNCYhbw-92k74VxRz6psCjVQISrcwHqtPQMubVguGbEznKuuqDnDVvxPQNnjrQ5Y98QrmJRdiUq8WjOJax0XIH2r63UMEV5HjWt4lDVG4aDHO2VUDFuwK4MkBbZgr0Hr9Iha4R2UG-scgl5tbnS')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              <div className="relative z-10 p-6 space-y-4 glass-panel border-t-0 border-x-0 border-b-2 border-transparent group-hover:border-primary transition-colors">
                <h3 className="font-headline-md text-headline-md text-on-surface">S1 Informatika</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-primary border border-outline-variant/30">AI &amp; Data Science</span>
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-primary border border-outline-variant/30">Software Engineering</span>
                </div>
                <a className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps pt-2 group-hover:text-primary transition-colors" href="#">
                  View Curriculum Architecture <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container-highest micro-shadow h-[400px] flex flex-col justify-end md:translate-y-8">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" 
                data-alt="A dramatic architectural macro shot of a server rack or cloud computing hardware in a cold, dark server room. Illuminated by striking cyan and blue LED lights reflecting off brushed metal surfaces. The scene is highly technical, precise, and implies massive processing power and network connectivity, perfectly suited for a dark mode tech interface." 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbAs4CnQjT7uSDoZ0twiEHJ0w4m_u3-Hb0eL4BEz6Kl4RbSjmTgo10g8VR-I3b7LrzmXwgkxtjfdLJkORVSwbf75WBDsxvQxUXSaVUR5cxDnezJkz0gl1CEhuECvJguNFSZkAa1r9FtRJRhPhq0KGD4ovpiym1h1BFStAE41AkFOrp66xGse5t969tD2q8BF4Iiovaj0a641nhXtrverfOhfs-6XNfTc47izo0P1uUgS_e4S-bjJfcpyuHkB9pM2OsHKNyBOytKBo4')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              <div className="relative z-10 p-6 space-y-4 glass-panel border-t-0 border-x-0 border-b-2 border-transparent group-hover:border-primary transition-colors">
                <h3 className="font-headline-md text-headline-md text-on-surface">D3 Teknik Informatika</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-secondary border border-outline-variant/30">Cloud Architecture</span>
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-secondary border border-outline-variant/30">Fullstack Development</span>
                </div>
                <a className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps pt-2 group-hover:text-primary transition-colors" href="#">
                  View Curriculum Architecture <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative rounded-xl overflow-hidden bg-surface-container-highest micro-shadow h-[400px] flex flex-col justify-end md:translate-y-16">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60" 
                data-alt="A sleek, futuristic visualization of fintech and digital business analytics. Glowing financial graphs, stock market candlesticks, and digital currency symbols interlock with geometric grids. The background is a very dark, matte slate gray. The lighting uses soft white and bright cyan to highlight data trends, creating a sophisticated, high-end corporate technology mood." 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwPUqeaVyvtOs1A2qK17Da9BSXI2nj3QXsDFVAjU6SwhV5ICBahQ0PcqIN3t-MBxCWLQrgBLUg7G7DI8ITGbJoOJsSJeUqBpUXZ6xYit8DKhWhEwG0mNe1GlyxMJeySzow9iA1-OYjQjF4TQTT8NJhqTi9gw3r_wjPAENp8G3mTBSAdC3jhVzx5p8VSfJNbyFOr_HyvnAqDV8eBLafvhoGhVj_6ShIvznTFn7Fk6XDoTqRhy5IMvgGxdM0evFnV3wH20vIOTJhYvHU')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              <div className="relative z-10 p-6 space-y-4 glass-panel border-t-0 border-x-0 border-b-2 border-transparent group-hover:border-primary transition-colors">
                <h3 className="font-headline-md text-headline-md text-on-surface">D3 Komp. Akuntansi</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-tertiary border border-outline-variant/30">FinTech Systems</span>
                  <span className="px-2 py-1 bg-surface-container/80 rounded-sm font-mono text-[10px] text-tertiary border border-outline-variant/30">Digital Business Analytics</span>
                </div>
                <a className="inline-flex items-center gap-2 text-secondary font-label-caps text-label-caps pt-2 group-hover:text-primary transition-colors" href="#">
                  View Curriculum Architecture <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Campaign & Infographic Stats */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-highest border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
            <div className="space-y-2 p-4">
              <div className="font-headline-lg text-headline-lg text-gradient font-black">94%</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Graduate Employability Rate within 6 Months</div>
            </div>
            <div className="space-y-2 p-4">
              <div className="font-headline-lg text-headline-lg text-gradient font-black">50+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Active Global Tech &amp; Venture Capital Partners</div>
            </div>
            <div className="space-y-2 p-4">
              <div className="font-headline-lg text-headline-lg text-gradient font-black">150+</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Technopreneur Inventions Launched</div>
            </div>
            <div className="space-y-2 p-4">
              <div className="font-headline-lg text-headline-lg text-gradient font-black text-secondary">A</div>
              <div className="font-label-caps text-label-caps text-on-surface-variant">Rated Advanced Engineering Infrastructure Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Ecosystem Engine */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline-md text-headline-md text-on-surface">Ecosystem Engine</h2>
            <a className="font-label-caps text-label-caps text-primary hover:text-secondary transition-colors inline-flex items-center gap-1" href="#">
              View All Activity 
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured News (Left) */}
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="relative h-[400px] rounded-xl overflow-hidden micro-shadow mb-6">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80" 
                  data-alt="A dynamic, high-energy photograph showing a diverse team of young technical engineering students intensely focused on glowing computer monitors in a dark esports or hackathon arena. The scene is illuminated by dramatic blue and cyan lighting emitting from the screens and stage lights. The mood is competitive, professional, and highly technical, capturing a moment of intense collaboration and digital problem solving." 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoqzg31QPRjQ1U0-36XSeAS53nNXTIsyxgnrLbqKcGoOARmR13ZoAXPgVbFPbtVXQSAaxtL3SgRigZrdkw6WJZ_qTUCliBuarZDVYkPPHceUp3jxcZKQlNgZ2Bh7IDHoJTGnoOhvKbPPvlITb_SLHlWgvqQL17blE-h2ANMK9Tx7bSrp6_ZPzOCUDQze15xyhOspfCuT4vOhry_4wv54ZgAWj2D2hgP3w8r4lm-Utywyr1QM3ITSlC4vi0zcooyAcQoAwO_lcrxHv_')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-sm font-mono text-[10px] text-primary border border-primary/30 uppercase">Achievement</span>
                </div>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors line-clamp-2">SWU Engineering Team Wins International IT Design &amp; Esport Innovation Competition 2026</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Demonstrating superior architectural design and systemic problem-solving on a global stage.</p>
            </div>
            {/* Events List (Right) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
              {/* Event Row 1 */}
              <a className="group flex gap-6 items-center p-4 rounded-lg hover:bg-surface-container-high/50 transition-colors border border-transparent hover:border-outline-variant/20" href="#">
                <div className="shrink-0 w-16 h-16 rounded-md bg-surface-container flex flex-col items-center justify-center border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-secondary">NOV</span>
                  <span className="font-headline-md text-headline-md text-on-surface leading-none mt-1">12</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">Academic Forum</span>
                  <h4 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold">AI-Driven Evaluasi Kurikulum 2026</h4>
                </div>
              </a>
              {/* Event Row 2 */}
              <a className="group flex gap-6 items-center p-4 rounded-lg hover:bg-surface-container-high/50 transition-colors border border-transparent hover:border-outline-variant/20" href="#">
                <div className="shrink-0 w-16 h-16 rounded-md bg-surface-container flex flex-col items-center justify-center border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-secondary">NOV</span>
                  <span className="font-headline-md text-headline-md text-on-surface leading-none mt-1">18</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">Partnership</span>
                  <h4 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold">Socialization of Bangkit Academy Cohort</h4>
                </div>
              </a>
              {/* Event Row 3 */}
              <a className="group flex gap-6 items-center p-4 rounded-lg hover:bg-surface-container-high/50 transition-colors border border-transparent hover:border-outline-variant/20" href="#">
                <div className="shrink-0 w-16 h-16 rounded-md bg-surface-container flex flex-col items-center justify-center border border-outline-variant/30">
                  <span className="font-mono text-[10px] text-secondary">DEC</span>
                  <span className="font-headline-md text-headline-md text-on-surface leading-none mt-1">05</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-primary uppercase tracking-wider block mb-1">Tech Expo</span>
                  <h4 className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold">Technopreneur Startup Showcase</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </>
  )
}

export default App
