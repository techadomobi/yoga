import { useId } from 'react';

type BrandLogoProps = {
  variant?: 'inline' | 'stacked';
  className?: string;
};

export default function BrandLogo({ variant = 'inline', className = '' }: BrandLogoProps) {
  const isStacked = variant === 'stacked';
  const instanceId = useId();
  const goldGradientId = `${instanceId}-brand-gold`;
  const greenGradientId = `${instanceId}-brand-green`;

  return (
    <div className={`flex ${isStacked ? 'flex-col items-center' : 'items-center'} gap-3 ${className}`}>
      <svg
        viewBox="0 0 240 180"
        className={isStacked ? 'w-24 h-24' : 'w-14 h-14 shrink-0'}
        role="img"
        aria-label="Mat and Mantra logo"
      >
        <defs>
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id={greenGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f855a" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
        <g transform="translate(120 84)">
          <ellipse cx="0" cy="56" rx="66" ry="12" fill={`url(#${goldGradientId})`} opacity="0.95" />
          <path d="M-9 14 C-25 35 -36 52 -34 72 C-17 62 -8 48 -2 31 C2 46 10 62 27 72 C29 52 17 35 1 14 Z" fill={`url(#${greenGradientId})`} />
          <path d="M-12 34 C-34 22 -48 8 -54 -15 C-31 -9 -16 2 -4 19 Z" fill="#6aa84f" />
          <path d="M12 34 C34 22 48 8 54 -15 C31 -9 16 2 4 19 Z" fill="#4f9d69" />
          <path d="M-28 27 C-48 17 -59 0 -62 -22 C-39 -17 -26 -6 -16 12 Z" fill="#2f855a" opacity="0.92" />
          <path d="M28 27 C48 17 59 0 62 -22 C39 -17 26 -6 16 12 Z" fill="#2f855a" opacity="0.92" />
          <path d="M-1 -2 C-16 12 -22 31 -15 49 C-4 40 1 27 0 10 C1 27 6 40 17 49 C24 31 18 12 3 -2 Z" fill={`url(#${greenGradientId})`} />
          <circle cx="0" cy="22" r="16" fill="#3c7d47" />
          <path d="M-58 33 C-72 45 -80 58 -82 75 C-60 73 -43 61 -31 44 Z" fill="#1f6b49" />
          <path d="M58 33 C72 45 80 58 82 75 C60 73 43 61 31 44 Z" fill="#1f6b49" />
          <path d="M-34 43 C-39 62 -38 79 -30 94 C-11 80 -5 62 -9 42 Z" fill="#f59e0b" opacity="0.95" />
          <path d="M34 43 C39 62 38 79 30 94 C11 80 5 62 9 42 Z" fill="#fbbf24" opacity="0.95" />
          <path d="M0 -39 C8 -33 11 -24 9 -17 C3 -13 -3 -13 -9 -17 C-11 -24 -8 -33 0 -39 Z" fill={`url(#${goldGradientId})`} />
          <circle cx="0" cy="-47" r="5" fill="#b45309" />
          <path d="M-28 -47 C-35 -52 -40 -62 -39 -71 C-29 -67 -21 -59 -17 -50 Z" fill="#fbbf24" />
          <path d="M28 -47 C35 -52 40 -62 39 -71 C29 -67 21 -59 17 -50 Z" fill="#fbbf24" />
        </g>
      </svg>

      <div className={isStacked ? 'text-center leading-none' : 'leading-none'}>
        <div className={`${isStacked ? 'text-4xl' : 'text-xl'} font-semibold tracking-tight`} style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          <span className="text-emerald-900">Mat</span>{' '}
          <span className="text-amber-700 text-sm align-middle tracking-[0.28em] uppercase">and</span>{' '}
          <span className="text-emerald-900">Mantra</span>
        </div>
      </div>
    </div>
  );
}