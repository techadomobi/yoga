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
    <div className={`flex ${isStacked ? 'flex-col items-center gap-2' : 'items-center gap-2.5'} ${className}`}>
      <svg
        viewBox="0 0 220 150"
        className={isStacked ? 'w-24 h-24' : 'w-12 h-12 shrink-0'}
        role="img"
        aria-label="Mat and Mantra logo"
      >
        <defs>
          <linearGradient id={goldGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8d34a" />
            <stop offset="58%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#c26d09" />
          </linearGradient>
          <linearGradient id={greenGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2f855a" />
            <stop offset="100%" stopColor="#0f4d35" />
          </linearGradient>
        </defs>
        <g transform="translate(110 68)">
          <ellipse cx="0" cy="40" rx="58" ry="10" fill={`url(#${goldGradientId})`} opacity="0.92" />
          <path d="M0 -28 C6 -19 8 -7 5 4 C2 12 -2 17 -6 20 C-10 17 -14 12 -17 4 C-20 -7 -18 -19 -12 -28 C-8 -33 -4 -35 0 -35 C4 -35 8 -33 12 -28 Z" fill={`url(#${greenGradientId})`} />
          <path d="M-12 -4 C-25 -16 -39 -21 -54 -20 C-49 -8 -40 2 -28 9 C-21 13 -15 14 -10 13 Z" fill="#3f8f55" />
          <path d="M12 -4 C25 -16 39 -21 54 -20 C49 -8 40 2 28 9 C21 13 15 14 10 13 Z" fill="#3f8f55" />
          <path d="M-22 14 C-36 9 -47 0 -55 -13 C-40 -14 -28 -9 -18 0 C-13 5 -10 10 -8 14 Z" fill="#2f855a" />
          <path d="M22 14 C36 9 47 0 55 -13 C40 -14 28 -9 18 0 C13 5 10 10 8 14 Z" fill="#2f855a" />
          <path d="M-3 5 C-14 13 -21 25 -22 39 C-9 35 -1 27 3 17 C6 26 14 34 27 39 C26 25 19 13 8 5 Z" fill={`url(#${greenGradientId})`} />
          <path d="M-18 19 C-26 27 -30 35 -31 46 C-18 44 -8 39 -2 31 C-5 25 -11 21 -18 19 Z" fill="#f4b400" />
          <path d="M18 19 C26 27 30 35 31 46 C18 44 8 39 2 31 C5 25 11 21 18 19 Z" fill="#f8c433" />
          <path d="M-2 -38 C4 -34 7 -28 7 -22 C4 -18 1 -17 -2 -17 C-5 -17 -8 -18 -11 -22 C-11 -28 -8 -34 -2 -38 Z" fill={`url(#${goldGradientId})`} />
          <circle cx="0" cy="-44" r="4.2" fill="#c26d09" />
          <path d="M-23 -31 C-28 -36 -32 -43 -32 -50 C-24 -48 -18 -43 -14 -36 Z" fill="#f8d34a" />
          <path d="M23 -31 C28 -36 32 -43 32 -50 C24 -48 18 -43 14 -36 Z" fill="#f8d34a" />
        </g>
      </svg>

      <div className={isStacked ? 'text-center leading-none' : 'leading-none'}>
        <div
          className={`${isStacked ? 'text-4xl' : 'text-[2.05rem]'} font-semibold tracking-tight whitespace-nowrap`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          <span className="text-emerald-900">Mat</span>{' '}
          <span className="text-amber-700 text-[0.52em] align-middle tracking-[0.26em] uppercase">and</span>{' '}
          <span className="text-emerald-900">Mantra</span>
        </div>
      </div>
    </div>
  );
}