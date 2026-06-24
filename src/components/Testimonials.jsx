const testimonials = [
  {
    text: '"Called them at 10pm after a power surge tripped our main breaker. They arrived within 45 minutes and had everything sorted. Professional, knowledgeable, and fairly priced. Highly recommend."',
    author: 'David M.',
    area: 'Constantia Kloof · Emergency Callout',
  },
  {
    text: '"Had our entire house rewired and a new DB board installed. The team was punctual, tidy, and the workmanship is excellent. COC provided on completion. Exactly what we needed."',
    author: 'Sarah V.',
    area: 'Honeydew · Full Rewiring',
  },
  {
    text: '"Installed a 5kW inverter system with battery backup at our office. We have not noticed a single load shedding downtime since. Professional installation from start to finish."',
    author: 'Michael T.',
    area: 'Randburg · Inverter Installation',
  },
]

export default function Testimonials() {
  return (
    <section className="py-32" id="testimonials">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">💬 Client Reviews</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase text-heading leading-[0.95] tracking-[-1px] mb-5">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.author} className="glass-card p-8 flex flex-col gap-4">
              <div className="text-accent tracking-[2px] text-base">★★★★★</div>
              <p className="text-sm text-text/70 leading-relaxed flex-1">{t.text}</p>
              <div>
                <div className="text-sm font-semibold text-heading">{t.author}</div>
                <div className="text-xs text-text/40">{t.area}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
