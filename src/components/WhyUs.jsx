const reasons = [
  { num: '01', title: 'Rapid Response', desc: 'Emergency callouts typically within 2 hours across Roodepoort and West Rand. Same-day service for urgent electrical faults.' },
  { num: '02', title: 'Fully Certified', desc: 'All work carried out by ECB-registered electricians. COC issued on completion for every job that requires certification.' },
  { num: '03', title: 'No Hidden Costs', desc: 'Upfront, transparent quotes before any work begins. What we quote is what you pay — no surprises, no add-ons.' },
  { num: '04', title: 'Quality Guaranteed', desc: 'We use trusted brands: Crabtree, Eurolux, ABB, and more. Workmanship guaranteed for your peace of mind.' },
]

export default function WhyUs() {
  return (
    <section className="py-32" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">⭐ Why Choose Us</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase text-heading leading-[0.95] tracking-[-1px] mb-5">
            Built on Trust & Expertise
          </h2>
          <p className="text-base text-text/60 leading-relaxed">
            Every job is backed by years of electrical experience, proper certification, and a commitment to quality.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(r => (
            <div key={r.num} className="glass-card p-9 text-center">
              <div className="font-display text-5xl font-black text-accent/50 leading-none mb-3">{r.num}</div>
              <h3 className="font-display text-base font-extrabold uppercase text-heading tracking-[0.3px] mb-2">{r.title}</h3>
              <p className="text-sm text-text/60 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
