import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1A1A1A] text-white pt-16 pb-10 px-8 overflow-hidden">
      
      {/* 1. Frase de Impacto Final */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="font-display italic font-normal text-3xl md:text-5xl leading-tight tracking-tighter">
          <span className="text-[#B89B5E]">Garanta uma celebração</span> à altura que esse momento inesquecível merece!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 md:gap-12">
        
        {/* 2. Logo Central Proporcional */}
        <div className="w-20 md:w-32 transition-transform hover:scale-105 duration-500">
          <Image 
            src="/assets/logowhite.png"
            alt="Riquíssimos Produções" 
            width={150} 
            height={150}
            className="object-contain opacity-90"
          />
        </div>

        {/* BOTÃO DE DOWNLOAD PDF - Estilo Refinado */}
        <a 
          href="/assets/propostajulia.pdf" 
          download="Proposta_Julia_XV.pdf"
          className="group flex items-center gap-3 bg-[#999999] hover:bg-[#eeeeee] text-white px-8 py-4 rounded-full font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl active:scale-95 border border-white/10"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:translate-y-1 transition-transform"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
          </svg>
          Baixar Proposta em PDF
        </a>

        {/* 3. Redes Sociais Clicáveis */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 z-10">
          {[
            { label: "Contato", href: "https://wa.me/+551993115436" },
            { label: "Instagram", href: "https://www.instagram.com/riquissimosoficial/" },
            { label: "Site Oficial", href: "https://riquissimos-lp.vercel.app/" }
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              target="_blank"
              className="font-sans text-[9px] md:text-xs uppercase tracking-[0.4em] hover:text-[#B89B5E] transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 4. Copyright e Créditos */}
        <div className="w-full pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] opacity-40 leading-relaxed">
            © {currentYear} Riquíssimos Maison Experience. <br className="md:hidden" /> Todos os direitos reservados.
          </p>
          <p className="font-sans text-[8px] uppercase tracking-[0.3em] opacity-40">
            Brasília - DF
          </p>
        </div>
      </div>
    </footer>
  );
}