export function StepModal({ step, onClose }: { step: any, onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-2xl rounded-[40px] p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-2xl opacity-50 hover:opacity-100"
        >
          ✕
        </button>

        <span className="text-blue-600 font-bold tracking-tighter text-5xl opacity-20">
          {step.number}
        </span>
        
        <h2 className="font-display italic text-3xl text-[#222] mt-4 mb-6">
          {step.title}
        </h2>
        
        <p className="font-sans text-[#444] leading-relaxed text-lg">
          {step.content}
        </p>

        {step.recolhimento && (
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-blue-600">
            <p className="font-sans text-sm font-bold text-[#222]">
              Recolhimento: <span className="font-normal opacity-80">{step.recolhimento}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}