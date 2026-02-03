'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PresskitSection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: "/assets/presskit.png", alt: "Detalhe Presskit" },
    { src: "/assets/presskit2.jpeg", alt: "Experiência Presskit" }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] py-16 md:py-24 px-6 md:px-24 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* TÍTULO NO TOPO */}
        <header className="max-w-3xl mb-8 md:mb-12 text-center mx-auto">
          <h2 className="font-display italic font-normal text-6xl md:text-8xl mb-6 md:mb-8 tracking-tighter leading-none">
            PressKit
          </h2>
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* DESKTOP: Coluna Esquerda - Carrossel de Imagens */}
          <div className="hidden lg:flex flex-col gap-6 w-full order-1">
            {images.map((img, index) => (
              <div key={index} className="relative h-[400px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-black/5">
                <Image 
                  src={img.src} 
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>

          {/* MOBILE: Carrossel de Imagens */}
          <div className="lg:hidden mb-8">
            <div className="relative h-[400px] w-full rounded-[30px] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={currentImage === 0}
              />
            </div>
            
            {/* Controles do Carrossel Mobile */}
            <div className="flex justify-center items-center mt-4 gap-8">
              <button 
                onClick={prevImage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Indicadores */}
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-black' : 'bg-black/30'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextImage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 shadow-lg hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Contador */}
            <div className="text-center mt-2 text-sm text-black/60 font-sans">
              {currentImage + 1} / {images.length}
            </div>
          </div>

          {/* DESKTOP & MOBILE: Coluna Direita - Texto */}
          <div className="space-y-8 z-10 order-2 text-center lg:text-left">
            <div className="space-y-6 font-sans">
              <p className="text-lg md:text-xl leading-relaxed opacity-90 text-pretty">
                As lembranças do evento serão desenvolvidas como uma experiência exclusiva e memorável para os adolescentes. 
                A proposta principal é a criação de um press kit luxuoso, pensado para ser usável e inteligente.
              </p>
              <p className="text-base opacity-70 italic">
                O press kit encontra-se em fase de formatação e atualização, sendo desenvolvido especialmente para esta festa.
              </p>
            </div>

            {/* Lista Técnica */}
            <div className="pt-8 border-t border-black/10">
              <h3 className="font-sans font-black text-sm uppercase tracking-[0.2em] mb-6">
                Proposta de Lembranças:
              </h3>
              <ul className="space-y-3 font-sans text-base opacity-90 text-left">
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Press kit luxuoso como proposta principal
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Formatação e desenvolvimento em andamento
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Possibilidade de ajustes conforme preferência
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Produção de caixa luxuosa e personalizada
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Conteúdo interno usável e criativo
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Personalização individual para cada adolescente
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-[#B89B5E]">•</span>
                  Acabamento sofisticado de alto padrão
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center px-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-30">
            Experiência Memorável • Riquíssimos Maison Experience
          </p>
        </footer>
      </div>
    </section>
  );
}