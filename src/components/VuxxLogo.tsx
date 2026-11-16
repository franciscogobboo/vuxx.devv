interface VuxxLogoProps {
  variant?: 'light' | 'dark' | 'mono';
  showWordmark?: boolean;
  className?: string;
}

export function VuxxSymbol({
  variant = 'light',
  className = 'h-7 w-7',
}: {
  variant?: 'light' | 'dark' | 'mono';
  className?: string;
}) {
  const leftArmColor =
    variant === 'mono' ? '#14121F' : variant === 'dark' ? '#8B6BFF' : '#6B3DF5';
  const rightArmColor =
    variant === 'mono' ? '#3A3847' : variant === 'dark' ? '#24D2F2' : '#11C5E8';
  const topAccentColor = variant === 'mono' ? '#14121F' : '#38E8A0';

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Left arm of V (Violeta) */}
      <polygon points="8,8 20,8 37,56 25,56" fill={leftArmColor} />
      {/* Right arm of V (Ciano) */}
      <polygon points="44,8 56,8 37,56 25,56" fill={rightArmColor} />
      {/* Center top accent (Neon) */}
      <rect x="29.5" y="8" width="5" height="9" fill={topAccentColor} />
    </svg>
  );
}

export function VuxxLogo({
  variant = 'light',
  showWordmark = true,
  className = '',
}: VuxxLogoProps) {
  const mainTextColor = variant === 'dark' ? 'text-white' : 'text-[#14121F]';
  const devTextColor =
    variant === 'mono'
      ? 'text-[#636073]'
      : variant === 'dark'
        ? 'text-[#8B6BFF]'
        : 'text-[#6B3DF5]';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      <VuxxSymbol variant={variant} className="h-7 w-7 shrink-0" />
      {showWordmark && (
        <span
          className={`text-[1.35rem] font-semibold leading-none tracking-[-0.03em] ${mainTextColor}`}
          style={{ fontFamily: 'var(--font-logo)' }}
        >
          vuxx<span className={devTextColor}>.dev</span>
        </span>
      )}
    </span>
  );
}
