type BrandLogoProps = {
  variant?: 'inline' | 'stacked';
  className?: string;
};

export default function BrandLogo({ variant = 'inline', className = '' }: BrandLogoProps) {
  const isStacked = variant === 'stacked';

  return (
    <div className={`flex ${isStacked ? 'flex-col items-center gap-2' : 'items-center gap-2.5'} ${className}`}>
      <img
        src="/Mat_and_Mantra_yoga_logo.png"
        alt="Mat and Mantra"
        className={isStacked ? 'w-40 max-w-none h-auto' : 'w-[10.5rem] max-w-none h-auto'}
      />
    </div>
  );
}