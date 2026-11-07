// Architectural / abstract compositions drawn in SVG: no stock photos, nothing to break.
import { motion } from 'motion/react'

const ink = '#25241F', taupe = '#B4A58E', stone = '#DAD8D1', ivory = '#F0EDE5'

/** Hero: a stair of planes rising out of shadow, forward movement. */
export function HeroArt() {
  const steps = Array.from({ length: 7 }, (_, i) => i)
  return (
    <svg viewBox="0 0 400 520" className="h-full w-full" role="img" aria-label="Abstract architectural composition of ascending planes">
      <rect width="400" height="520" fill={stone} />
      <motion.path d="M0 520 L400 120 L400 520 Z" fill={ink} opacity="0.06" initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} transition={{ duration: 2 }} />
      {steps.map((i) => (
        <motion.g key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.12, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <rect x={40 + i * 44} y={440 - i * 52} width={360 - i * 44} height={52} fill={i % 2 ? ivory : '#E6E2D8'} />
          <rect x={40 + i * 44} y={440 - i * 52} width={360 - i * 44} height={6} fill={ink} opacity={0.12} />
        </motion.g>
      ))}
      <motion.line x1="0" y1="0" x2="400" y2="520" stroke={taupe} strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, delay: 0.4 }} />
      <motion.circle cx="326" cy="86" r="22" fill={ink} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6, type: 'spring', stiffness: 80 }} />
    </svg>
  )
}

/** Small per-project compositions that hint at each system's shape. */
export function ProjectArt({ kind }: { kind: 'rag' | 'parking' | 'routes' | 'dash' }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden>
      <rect width="400" height="300" fill={kind === 'rag' || kind === 'routes' ? ink : stone} />
      {kind === 'rag' && (
        <g fill="none" stroke={ivory}>
          {[0, 1, 2, 3, 4, 5].map((i) => <rect key={i} x={40} y={50 + i * 34} width={110} height={22} opacity={i < 4 ? 0.9 : 0.25} />)}
          <path d="M150 61 C 220 61, 220 150, 260 150 M150 95 C 220 95, 220 150, 260 150 M150 129 C 220 129, 220 150, 260 150 M150 163 C 220 163, 220 150, 260 150" opacity="0.6" />
          <rect x="260" y="120" width="60" height="60" stroke={taupe} />
          <line x1="320" y1="150" x2="360" y2="150" />
          <circle cx="366" cy="150" r="6" fill={taupe} stroke="none" />
          <line x1="290" y1="180" x2="290" y2="240" strokeDasharray="3 4" opacity="0.5" />
          <text x="296" y="236" fill={ivory} stroke="none" fontSize="10" fontFamily="Times New Roman, Times, serif" opacity="0.6">refuse</text>
        </g>
      )}
      {kind === 'parking' && (
        <g>
          {Array.from({ length: 6 }, (_, i) => <rect key={i} x={40 + i * 56} y={60} width={40} height={90} fill="none" stroke={ink} opacity={0.5} />)}
          {Array.from({ length: 6 }, (_, i) => <rect key={i} x={40 + i * 56} y={170} width={40} height={90} fill={i < 3 ? ink : 'none'} stroke={ink} opacity={i < 3 ? 0.85 : 0.5} />)}
          <line x1="20" y1="160" x2="380" y2="160" stroke={taupe} strokeWidth="2" />
        </g>
      )}
      {kind === 'routes' && (
        <g fill="none" stroke={ivory}>
          {[[90, 90], [140, 200], [230, 70], [300, 180], [330, 110], [180, 130]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={30} opacity="0.18" />)}
          <path d="M60 250 L90 90 L180 130 L230 70 L330 110 L300 180 L140 200 Z" stroke={taupe} />
          {[[90, 90], [180, 130], [230, 70], [330, 110], [300, 180], [140, 200]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={ivory} />)}
        </g>
      )}
      {kind === 'dash' && (
        <g>
          {Array.from({ length: 14 }, (_, i) => {
            const h = 40 + Math.abs(Math.sin(i * 0.7)) * 140
            return <rect key={i} x={40 + i * 23} y={250 - h} width={14} height={h} fill={i === 9 ? ink : taupe} opacity={i === 9 ? 1 : 0.55} />
          })}
          <line x1="30" y1="250" x2="370" y2="250" stroke={ink} />
        </g>
      )}
    </svg>
  )
}
