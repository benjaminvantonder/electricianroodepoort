const services = [
  {
    title: 'DB Board Upgrades & Installations',
    desc: 'Safe, compliant distribution board upgrades for homes and businesses. We replace old fuse boxes with modern circuit breaker boards.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="6" width="32" height="36" rx="3"/><line x1="16" y1="16" x2="32" y2="16"/><line x1="16" y1="24" x2="32" y2="24"/><line x1="16" y1="32" x2="26" y2="32"/></svg>,
  },
  {
    title: 'Fault Finding & Electrical Repairs',
    desc: 'Expert diagnostics to locate and fix electrical faults quickly. Tripping circuits, dead sockets, flickering lights — we solve it all.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 4v8M24 36v8M8 24h8M32 24h8"/><circle cx="24" cy="24" r="12"/><path d="M24 14v10l6 6"/></svg>,
  },
  {
    title: 'Inverter & Solar Installations',
    desc: 'Stay powered during load shedding. We install inverter systems, battery backup, and solar-ready wiring for homes and offices.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="24" cy="24" r="20"/><path d="M24 8v16l10 10"/><path d="M12 24h4M32 24h4M24 12v4M24 32v4"/></svg>,
  },
  {
    title: 'Generator Connections',
    desc: 'Professional generator installation with automatic changeover switches. Keep your essential circuits powered during outages.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="10" y="14" width="28" height="26" rx="3"/><path d="M14 14V10a4 4 0 014-4h12a4 4 0 014 4v4"/><circle cx="24" cy="29" r="3"/><line x1="24" y1="32" x2="24" y2="36"/></svg>,
  },
  {
    title: 'Electrical COC Certificates',
    desc: 'Certificate of Compliance issued for property sales, rentals, and electrical inspections. Ensure your property is legally compliant.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 44V16l12-8v36"/><path d="M40 44V16L28 8v36"/><rect x="8" y="14" width="32" height="6" rx="1"/><line x1="20" y1="20" x2="20" y2="44"/><line x1="28" y1="20" x2="28" y2="44"/></svg>,
  },
  {
    title: 'New Installations & Rewiring',
    desc: 'Full electrical installations for new builds, renovations, and rewiring of older properties. Done to SANS 10142 standards.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 44V16l6-4v32"/><path d="M36 44V16l-6-4v32"/><rect x="6" y="14" width="36" height="6" rx="1"/><line x1="18" y1="30" x2="30" y2="30"/><line x1="18" y1="36" x2="30" y2="36"/></svg>,
  },
  {
    title: 'Emergency Electrical Services',
    desc: '24/7 emergency callouts for power failures, exposed wires, electrical fires, and any urgent electrical issue. Same-day response.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 4v8M24 36v8M4 24h8M36 24h8"/><path d="M24 4L4 24h40L24 4z" opacity=".2"/><path d="M14 24l10 10 10-10"/></svg>,
  },
  {
    title: 'Commercial & Industrial Electrical',
    desc: 'Three-phase power, distribution, lighting, and maintenance for factories, offices, retail spaces, and industrial facilities.',
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="10" width="36" height="30" rx="3"/><path d="M14 10V6a2 2 0 012-2h16a2 2 0 012 2v4"/><line x1="18" y1="24" x2="30" y2="24"/><line x1="18" y1="30" x2="26" y2="30"/><circle cx="34" cy="28" r="2"/></svg>,
  },
]

export default function Services() {
  return (
    <section className="py-32" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">⚡ Our Expertise</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase text-heading leading-[0.95] tracking-[-1px] mb-5">
            Electrical Services in Roodepoort
          </h2>
          <p className="text-base text-text/60 leading-relaxed">
            From emergency repairs to full installations, our qualified team handles every electrical job with precision and care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card p-9"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 mb-4 text-accent">{s.icon}</div>
              <h3 className="font-display text-lg font-extrabold uppercase text-heading tracking-[0.3px] mb-2">{s.title}</h3>
              <p className="text-sm text-text/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
