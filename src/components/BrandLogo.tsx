type BrandLogoProps = {
  variant?: 'inline' | 'stacked';
  className?: string;
};

export default function BrandLogo({ variant = 'inline', className = '' }: BrandLogoProps) {
  const isStacked = variant === 'stacked';
  const sizeClass = isStacked
    ? 'w-40 sm:w-44 md:w-48'
    : 'w-28 sm:w-36 md:w-44 lg:w-48';

  return (
    <div className={`flex shrink-0 ${isStacked ? 'flex-col items-center gap-2' : 'items-center gap-2.5'} ${className}`}>
      <img
        src="/Mat_and_Mantra_yoga_logo.png"
        alt="Mat and Mantra"
        className={`${sizeClass} h-auto max-w-full object-contain`}
      />
    </div>
  );
}