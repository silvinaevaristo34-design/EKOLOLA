interface LogoProps {
  white?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ white, size = 'md' }: LogoProps) {
  const sizes = { sm: 24, md: 32, lg: 40 }
  const s = sizes[size]
  const text = white ? 'text-white' : 'text-navy'

  return (
    <div className="flex items-center gap-2">
      <svg width={s} height={s} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" fill="#16A34A" opacity="0.15"/>
        <path
          d="M20 8 C26 8, 32 14, 32 20 C32 26, 26 32, 20 32"
          stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
        <path
          d="M20 8 L17 12 L23 12 Z"
          fill="#16A34A"
        />
        <path
          d="M20 32 C14 32, 8 26, 8 20 C8 14, 14 8, 20 8"
          stroke={white ? '#4ADE80' : '#166534'} strokeWidth="2.5" strokeLinecap="round" fill="none"
        />
        <path
          d="M20 32 L23 28 L17 28 Z"
          fill={white ? '#4ADE80' : '#166534'}
        />
      </svg>
      <span className={`font-display font-800 tracking-tight ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-xl' : 'text-2xl'} ${text}`}>
        EKOLOLA
      </span>
    </div>
  )
}
