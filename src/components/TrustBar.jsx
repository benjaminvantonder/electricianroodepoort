const trustItems = [
  { icon: '✅', label: 'ECB Registered', desc: 'Electrical Contractors Board Accredited' },
  { icon: '📋', label: 'COC Certified', desc: 'We Issue Compliance Certificates' },
  { icon: '⚡', label: '24/7 Emergency', desc: 'Same-day response, day or night' },
  { icon: '🏆', label: 'Qualified Team', desc: 'Licensed & insured electricians' },
]

export default function TrustBar() {
  return (
    <div className="relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="glass rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-4" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-lg shrink-0">
                {item.icon}
              </div>
              <div>
                <strong className="block text-sm font-bold text-heading">{item.label}</strong>
                <span className="text-xs text-text/50">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
