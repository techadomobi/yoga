type BrandLogoProps = {
  variant?: 'inline' | 'stacked';
  className?: string;
};

export default function BrandLogo({ variant = 'inline', className = '' }: BrandLogoProps) {
  const isStacked = variant === 'stacked';

  return (
    <div className={`flex shrink-0 ${isStacked ? 'flex-col items-center gap-1.5' : 'items-center gap-2'} ${className}`}>
      <div className={isStacked ? 'w-24 h-16 sm:w-28 sm:h-[4.5rem] overflow-hidden' : 'w-16 h-11 sm:w-[4.5rem] sm:h-12 md:w-20 md:h-14 overflow-hidden'}>
        <img
          src="/Mat_and_Mantra_yoga_logo.png"
          alt="Mat and Mantra"
          className="w-full h-full object-cover object-[50%_62%] mix-blend-multiply"
        />
      </div>

      <div className={`${isStacked ? 'text-center' : 'leading-none'} select-none`}> 
        <span className={isStacked ? 'text-emerald-900 text-base sm:text-lg font-semibold' : 'text-emerald-900 text-lg sm:text-xl md:text-2xl font-semibold'} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Mat
        </span>
        <span className={isStacked ? 'mx-1 text-amber-700 text-[0.52rem] sm:text-[0.6rem] font-semibold tracking-[0.2em] uppercase align-middle' : 'mx-1 text-amber-700 text-[0.62rem] sm:text-xs md:text-sm font-semibold tracking-[0.22em] uppercase align-middle'}>
          and
        </span>
        <span className={isStacked ? 'text-emerald-900 text-base sm:text-lg font-semibold' : 'text-emerald-900 text-lg sm:text-xl md:text-2xl font-semibold'} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Mantra
        </span>
      </div>
    </div>
  );
}