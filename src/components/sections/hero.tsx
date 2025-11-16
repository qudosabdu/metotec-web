import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="relative bg-[var(--color-dark-charcoal)] text-white bg-cover bg-center hero-bg">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/BG-LOGO.mp4"
          poster="/METOTEC-bg.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative container z-20 flex min-h-[60vh] flex-col items-center justify-center py-20 text-center lg:min-h-[70vh]">
          <h1 className="max-w-4xl text-[32px] font-black leading-tight md:text-4xl lg:text-5xl text-white">
            METOTEC — Industrial Stocklot Trading
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg md:text-xl text-white">
            Internationale Handelsfirma für den Ankauf von neuen und gebrauchten technischen Wirtschaftsgütern aller Art
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="text-sm font-bold uppercase tracking-wide">Fast Processing</div>
              <div className="text-xs text-gray-300">Quick turnaround</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-white/30"></div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-bold uppercase tracking-wide">Global Network</div>
              <div className="text-xs text-gray-300">Worldwide reach</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-white/30"></div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-bold uppercase tracking-wide">Premium Quality</div>
              <div className="text-xs text-gray-300">Excellence assured</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;