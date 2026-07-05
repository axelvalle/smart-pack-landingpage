/**
 * SVG decorations inspired by Nicaragua's national symbols:
 *  - Sacuanjoche (Plumeria rubra) — national flower
 *  - Madroño (Calycophyllum candidissimum) — national tree
 *  - Guardabarranco (Eumomota superciliosa) — national bird
 */

export function SacuanjocheSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* 5-petal plumeria flower */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <g key={i} transform={`rotate(${deg} 60 60)`}>
          <ellipse cx="60" cy="28" rx="11" ry="22" fill="#FFF9F2" stroke="#F58A2A" strokeWidth="1.5" />
          {/* Inner petal vein */}
          <line x1="60" y1="16" x2="60" y2="46" stroke="#FFC56B" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      ))}
      {/* Center */}
      <circle cx="60" cy="60" r="10" fill="#FFC56B" />
      <circle cx="60" cy="60" r="5" fill="#F58A2A" />
    </svg>
  )
}

export function MadronoSprigSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Main stem */}
      <path d="M50 130 C50 90 45 70 50 40" stroke="#1F6B4F" strokeWidth="3" strokeLinecap="round" />
      {/* Left branch */}
      <path d="M49 80 C35 72 22 68 15 58" stroke="#2F9E72" strokeWidth="2" strokeLinecap="round" />
      {/* Right branch */}
      <path d="M50 65 C62 56 74 50 82 42" stroke="#2F9E72" strokeWidth="2" strokeLinecap="round" />
      {/* Left leaves */}
      <ellipse cx="22" cy="55" rx="12" ry="6" fill="#2F9E72" transform="rotate(-30 22 55)" />
      <ellipse cx="36" cy="65" rx="10" ry="5" fill="#DDF3E8" stroke="#2F9E72" strokeWidth="1" transform="rotate(-20 36 65)" />
      {/* Right leaves */}
      <ellipse cx="80" cy="40" rx="12" ry="6" fill="#2F9E72" transform="rotate(20 80 40)" />
      <ellipse cx="66" cy="50" rx="9" ry="5" fill="#DDF3E8" stroke="#2F9E72" strokeWidth="1" transform="rotate(10 66 50)" />
      {/* Top leaves */}
      <ellipse cx="50" cy="32" rx="10" ry="5" fill="#2F9E72" transform="rotate(-5 50 32)" />
      <ellipse cx="42" cy="22" rx="8" ry="4" fill="#DDF3E8" stroke="#2F9E72" strokeWidth="1" transform="rotate(-25 42 22)" />
      <ellipse cx="58" cy="20" rx="8" ry="4" fill="#2F9E72" transform="rotate(15 58 20)" />
      {/* Red berries */}
      <circle cx="16" cy="52" r="3.5" fill="#E05252" />
      <circle cx="82" cy="37" r="3.5" fill="#E05252" />
      <circle cx="50" cy="18" r="3" fill="#E05252" />
      <circle cx="28" cy="60" r="2.5" fill="#F58A2A" />
      <circle cx="70" cy="46" r="2.5" fill="#E05252" />
    </svg>
  )
}

export function GuardaBarrancoSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 110"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Body */}
      <ellipse cx="58" cy="52" rx="26" ry="18" fill="#2F9E72" />
      {/* Belly */}
      <ellipse cx="60" cy="58" rx="16" ry="11" fill="#DDF3E8" />
      {/* Head */}
      <circle cx="86" cy="38" r="16" fill="#2F9E72" />
      {/* Eye */}
      <circle cx="92" cy="35" r="4" fill="white" />
      <circle cx="93" cy="35" r="2.2" fill="#263238" />
      {/* Turquoise eye-stripe */}
      <path d="M76 32 C80 28 88 28 96 30" stroke="#5ECFCF" strokeWidth="3.5" strokeLinecap="round" />
      {/* Black mask */}
      <path d="M78 38 C82 35 90 35 98 38" stroke="#263238" strokeWidth="2" strokeLinecap="round" />
      {/* Beak */}
      <path d="M100 37 L116 34 L100 41 Z" fill="#263238" />
      {/* Wing */}
      <path d="M42 46 C30 38 20 42 16 50 C22 52 34 52 42 56 Z" fill="#1F6B4F" />
      {/* Tail — the signature long racket tail */}
      <path d="M34 60 C20 70 8 88 6 100" stroke="#1F6B4F" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 64 C22 76 10 94 8 106" stroke="#263238" strokeWidth="2.5" strokeLinecap="round" />
      {/* Tail tip (racket) */}
      <ellipse cx="7" cy="104" rx="5" ry="8" fill="#5ECFCF" transform="rotate(-20 7 104)" />
      <ellipse cx="9" cy="108" rx="4" ry="7" fill="#263238" transform="rotate(-20 9 108)" />
      {/* Feet */}
      <line x1="56" y1="68" x2="50" y2="78" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="64" y1="68" x2="60" y2="78" stroke="#263238" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="78" x2="45" y2="83" stroke="#263238" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="50" y1="78" x2="54" y2="84" stroke="#263238" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
