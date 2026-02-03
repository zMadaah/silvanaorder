// src/section/roadmap/setp-card.tsx
import { Step } from "./data";

export function StepCard({ step }: { step: Step }) {
  return (
    <div className="group relative bg-[#666666] p-8 rounded-[30px] shadow-xl md:hover:scale-105 transition-all duration-300 border border-white/10 flex flex-col justify-between min-h-[300px]">
      
      {/* Número do Passo em destaque */}
      <div className="absolute top-6 right-8 text-white/20 font-display italic text-5xl group-hover:text-white/40 transition-colors">
        {step.number}
      </div>

      <div className="space-y-4 z-10">
        <h3 className="font-display italic text-2xl text-white leading-tight">
          {step.title}
        </h3>
        
        {/* Ajuste do texto: line-clamp removido no mobile para leitura total */}
        <p className="font-sans text-sm md:text-base text-white/90 leading-relaxed 
                      line-clamp-none md:line-clamp-4 md:group-hover:line-clamp-none 
                      transition-all duration-500">
          {step.content}
        </p>
      </div>

      {step.recolhimento && (
        <div className="mt-6 pt-4 border-t border-white/20">
          <p className="font-sans text-[10px] uppercase tracking-widest text-white/60">
            {step.recolhimento}
          </p>
        </div>
      )}
    </div>
  );
}