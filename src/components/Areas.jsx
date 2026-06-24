const suburbs = [
  'Roodepoort','Honeydew','Randburg','Krugersdorp','Florida','Constantia Kloof',
  'Douglasdale','Fairland','Northriding','Olivedale','Horizon View','Weltevredenpark',
  'Bromhof','Wilro Park','Johannesburg West','Little Falls',
]

export default function Areas() {
  return (
    <section className="py-32" id="areas">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">📍 Service Areas</span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black uppercase text-heading leading-[0.95] tracking-[-1px] mb-5">
            Covering the West Rand & Beyond
          </h2>
          <p className="text-base text-text/60 leading-relaxed">
            We provide electrical services across Roodepoort, Honeydew, Randburg, and all major suburbs in the West Rand.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {suburbs.map(s => (
            <div key={s} className="glass-card px-5 py-4 text-sm text-text/70 text-center">{s}</div>
          ))}
        </div>
        <div className="mt-10 glass rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114414.80975306498!2d27.8103507!3d-26.1426924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f5d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRoodepoort!5e0!3m2!1sen!2sza!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Roodepoort service area map"
            className="w-full h-[320px] border-0 block"
          />
        </div>
      </div>
    </section>
  )
}
