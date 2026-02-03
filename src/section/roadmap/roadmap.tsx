"use client";
import { steps } from "./data";
import { StepCard } from "./setp-card";
import Image from "next/image";

export default function Roadmap() {
  return (
    <section className="relative min-h-screen bg-[#f3f4f6] py-16 md:py-24 px-6 md:px-20 overflow-hidden flex flex-col items-center">
      
      {/* CONTAINER DA LOGO: Centralizado no Mobile, Absoluto no Desktop */}
      <div className="flex justify-center md:justify-end w-full mb-12 md:mb-0 md:absolute md:top-10 md:right-10 z-20">
        <div className="w-24 md:w-28">
          <Image 
            src="/assets/logo.png" 
            alt="Riquíssimos" 
            width={90} 
            height={90} 
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* CABEÇALHO: Centralizado no Mobile para acompanhar o eixo da logo */}
        <header className="mb-16 text-center md:text-left">
          <h2 className="font-display italic font-normal text-5xl md:text-7xl text-[#222] tracking-tighter leading-tight">
            A Experiência Riquíssimos: <br/>
            <span className="font-sans not-italic text-xl md:text-2xl uppercase tracking-[0.3em] opacity-60 block mt-4">
              Passo a Passo
            </span>
          </h2>
        </header>

        {/* Grid de Cards: Responsivo nativo do Tailwind */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>

    </section>
  );
}