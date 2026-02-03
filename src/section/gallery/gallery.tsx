"use client";
import { useRef } from "react";
import Image from "next/image";

const items = [
  { title: "LOUNGE", src: "/assets/lounge2.png" },
  { title: "DOCES FINOS", src: "/assets/doce2.png" },
  { title: "PRESSKIT CONVIDADOS", src: "/assets/kit.jpeg" },
  { title: "CARPETAGEM", src: "/assets/carpete.jpeg" },
  { title: "CENOGRAFIA", src: "/assets/decoracao.png" },
  { title: "HALL DE ENTRADA", src: "/assets/hall.jpeg" }
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#F3F3F3] pt-24 pb-0 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <h2 className="font-display italic text-6xl md:text-8xl mb-8 tracking-tight">Aniversário Julia</h2>
          <p className="max-w-4xl mx-auto font-sans text-base md:text-lg leading-relaxed text-[#333] opacity-90 px-4">
            Criamos cenários onde tudo se conecta. A identidade visual, as flores e a cenografia dialogam entre si para construir uma atmosfera coesa, delicada e marcante. A proposta contempla o evento por completo da concepção criativa à experiência final. Esse olhar integrado valoriza o investimento e garante um resultado sofisticado, luxuoso e com grande impacto visual inesquecível.
          </p>
        </header>

        {/* Galeria Horizontal */}
        <div className="relative group mb-20">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 px-4"
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative min-w-[85vw] md:min-w-[400px] h-[500px] md:h-[600px] snap-center rounded-[40px] overflow-hidden shadow-2xl group/card"
              >
                {/* A Imagem vinda da sua pasta assets */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                />

                {/* Overlay Escuro para legibilidade (igual à sua print) */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12">
                  <span className="font-sans font-black text-3xl md:text-4xl text-center tracking-tighter text-white leading-none z-10">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Setas de navegação desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-5 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-5 rounded-full shadow-xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            →
          </button>
        </div>
      </div>

      {/* Faixa Infinita de Logos (Rodapé da Imagem) */}
      <div className="w-full bg-[#1A1A1A] py-6 flex overflow-hidden border-t border-white/10">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-4">
              {/* <Image src="/asstes/logowhite.png" alt="Riquíssimos" width={40} height={40} className="opacity-80" /> */}
              <span className="text-white font-sans font-black text-[10px] tracking-[0.3em] uppercase">
                Riquíssimos <span className="font-light opacity-50 ml-2">Maison Experience</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos para a animação da faixa infinita */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}