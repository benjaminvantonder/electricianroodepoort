import { Link } from 'react-router-dom'

const allServices = [
  {
    title: 'DB Board Upgrades & Installations',
    desc: 'Safe, compliant distribution board upgrades for homes and businesses. We replace old fuse boxes with modern circuit breaker boards, ensuring your property meets all SANS 10142 regulations.',
    details: ['Replace old fuse boxes with modern DB boards', 'Add additional circuits for new appliances', 'Surge protection device installation', 'Earth leakage unit testing and replacement', 'Load balancing for three-phase systems'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="8" y="6" width="32" height="36" rx="3"/><line x1="16" y1="16" x2="32" y2="16"/><line x1="16" y1="24" x2="32" y2="24"/><line x1="16" y1="32" x2="26" y2="32"/></svg>,
  },
  {
    title: 'Fault Finding & Electrical Repairs',
    desc: 'Expert diagnostics to locate and fix electrical faults quickly. Tripping circuits, dead sockets, flickering lights — we solve it all using professional testing equipment.',
    details: ['Comprehensive electrical inspections', 'Tripping circuit breaker diagnosis', 'Flickering light troubleshooting', 'Dead socket and switch repairs', 'Overload and short circuit repairs'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 4v8M24 36v8M8 24h8M32 24h8"/><circle cx="24" cy="24" r="12"/><path d="M24 14v10l6 6"/></svg>,
  },
  {
    title: 'Inverter & Solar Installations',
    desc: 'Stay powered during load shedding. We design and install complete backup power systems including hybrid inverters, lithium battery banks, and solar panel arrays.',
    details: ['Hybrid inverter system design and install', 'Lithium battery bank installation', 'Solar panel array installation', 'Automatic changeover switching', 'Load-shedding proofing for essential circuits'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="24" cy="24" r="20"/><path d="M24 8v16l10 10"/><path d="M12 24h4M32 24h4M24 12v4M24 32v4"/></svg>,
  },
  {
    title: 'Generator Connections',
    desc: 'Professional generator installation with automatic changeover switches. Keep your essential circuits powered during extended outages.',
    details: ['Generator changeover switch installation', 'Generator socket installation', 'Automatic mains failure (AMF) panels', 'Load shedding connection points', 'Earth leakage and safety compliance'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="10" y="14" width="28" height="26" rx="3"/><path d="M14 14V10a4 4 0 014-4h12a4 4 0 014 4v4"/><circle cx="24" cy="29" r="3"/><line x1="24" y1="32" x2="24" y2="36"/></svg>,
  },
  {
    title: 'Electrical COC Certificates',
    desc: 'Certificate of Compliance issued for property sales, rentals, and electrical inspections. Ensure your property is legally compliant and safe for occupancy.',
    details: ['Electrical installation inspections', 'COC issuance for property transfers', 'COC for rental properties', 'Electrical fence COC certificates', 'Re-test and re-issue of expired COCs'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 44V16l12-8v36"/><path d="M40 44V16L28 8v36"/><rect x="8" y="14" width="32" height="6" rx="1"/><line x1="20" y1="20" x2="20" y2="44"/><line x1="28" y1="20" x2="28" y2="44"/></svg>,
  },
  {
    title: 'New Installations & Rewiring',
    desc: 'Full electrical installations for new builds, renovations, and rewiring of older properties. All work performed to SANS 10142 standards.',
    details: ['New building electrical installation', 'Full house rewiring', 'Additional socket and light points', 'Kitchen and bathroom electrical installation', 'Garage and outbuilding electrical supply'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 44V16l6-4v32"/><path d="M36 44V16l-6-4v32"/><rect x="6" y="14" width="36" height="6" rx="1"/><line x1="18" y1="30" x2="30" y2="30"/><line x1="18" y1="36" x2="30" y2="36"/></svg>,
  },
  {
    title: 'Emergency Electrical Services',
    desc: '24/7 emergency callouts for power failures, exposed wires, electrical fires, and any urgent electrical issue. Same-day response across the West Rand.',
    details: ['Power failure restoration', 'Exposed wire safety repairs', 'Electrical fire damage repair', 'Storm damage electrical repair', 'Emergency disconnect and reconnect'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M24 4v8M24 36v8M4 24h8M36 24h8"/><path d="M24 4L4 24h40L24 4z" opacity=".2"/><path d="M14 24l10 10 10-10"/></svg>,
  },
  {
    title: 'Commercial & Industrial Electrical',
    desc: 'Three-phase power, distribution, lighting, and maintenance for factories, offices, retail spaces, and industrial facilities across the West Rand.',
    details: ['Three-phase power installations', 'Commercial lighting design and install', 'Industrial machine electrical supply', 'Office and retail electrical maintenance', 'Distribution board upgrades for commercial'],
    icon: <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="10" width="36" height="30" rx="3"/><path d="M14 10V6a2 2 0 012-2h16a2 2 0 012 2v4"/><line x1="18" y1="24" x2="30" y2="24"/><line x1="18" y1="30" x2="26" y2="30"/><circle cx="34" cy="28" r="2"/></svg>,
  },
]

export default function ServicesPage() {
  return (
    <div className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">⚡ Our Expertise</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black uppercase text-heading leading-[0.92] tracking-[-1.5px] mb-5">
            Full Service Electrical Contractors
          </h1>
          <p className="text-base text-text/60 leading-relaxed">
            From minor repairs to major installations, every job is handled by qualified, ECB-registered electricians. Here is everything we do.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {allServices.map((s, i) => (
            <div key={s.title} className="glass-card p-8 lg:p-10 grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-3">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 text-accent shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <h2 className="font-display text-xl font-extrabold uppercase text-heading tracking-[0.3px] mb-2">{s.title}</h2>
                    <p className="text-sm text-text/60 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <ul className="flex flex-col gap-2.5">
                  {s.details.map(d => (
                    <li key={d} className="flex items-center gap-3 text-sm text-text/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block glass-card p-10 max-w-lg mx-auto">
            <h3 className="font-display text-2xl font-black uppercase text-heading mb-3">Need a Quote?</h3>
            <p className="text-sm text-text/60 mb-6">Get in touch and we will respond within 2 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
              <a href="tel:+27650724994" className="btn-outline">📞 +27 65 072 4994</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
