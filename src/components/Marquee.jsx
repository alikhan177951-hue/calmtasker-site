const items = [
  'Custom websites',
  'Bookings & portals',
  'Native iOS',
  'Native Android',
  'Product software',
  'MVPs',
  'Internal tools',
  'Launch support',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-sun/10 bg-forest/10 py-4">
      <div className="marquee-track text-sm uppercase tracking-[0.22em] text-sun/90">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-sun" />
          </span>
        ))}
      </div>
    </div>
  )
}
