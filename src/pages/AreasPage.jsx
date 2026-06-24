import { Link } from 'react-router-dom'

const suburbs = [
  { name: 'Roodepoort', desc: 'Our home base — full electrical services across all Roodepoort suburbs and industrial areas.' },
  { name: 'Honeydew', desc: 'Residential and commercial electrical work in Honeydew and surrounding areas.' },
  { name: 'Randburg', desc: 'Full electrical services for homes and businesses in Randburg and Bryanston.' },
  { name: 'Krugersdorp', desc: 'Covering all electrical needs in Krugersdorp, from residential to industrial.' },
  { name: 'Florida', desc: 'Residential rewiring, DB upgrades, and emergency callouts in Florida.' },
  { name: 'Constantia Kloof', desc: 'Premium residential electrical services in Constantia Kloof.' },
  { name: 'Douglasdale', desc: 'Electrical installations and maintenance across Douglasdale.' },
  { name: 'Fairland', desc: 'Full electrical services for Fairland homes and businesses.' },
  { name: 'Northriding', desc: 'Covering all electrical work in Northriding and surrounding areas.' },
  { name: 'Olivedale', desc: 'Electrical services for Olivedale homes and commercial properties.' },
  { name: 'Horizon View', desc: 'Residential and commercial electrical work in Horizon View.' },
  { name: 'Weltevredenpark', desc: 'Full electrical services across Weltevredenpark.' },
  { name: 'Bromhof', desc: 'Electrical installations, repairs, and COCs in Bromhof.' },
  { name: 'Wilro Park', desc: 'Residential electrical services in Wilro Park.' },
  { name: 'Johannesburg West', desc: 'Commercial and industrial electrical work across Johannesburg West.' },
  { name: 'Little Falls', desc: 'Electrical services for homes and businesses in Little Falls.' },
]

export default function AreasPage() {
  return (
    <div className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">📍 Service Areas</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black uppercase text-heading leading-[0.92] tracking-[-1.5px] mb-5">
            Covering the West Rand & Beyond
          </h1>
          <p className="text-base text-text/60 leading-relaxed">
            We provide electrical services across Roodepoort, Honeydew, Randburg, and all major suburbs in the West Rand. Emergency callouts typically within 2 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suburbs.map(s => (
            <div key={s.name} className="glass-card p-6">
              <h3 className="font-display text-lg font-extrabold uppercase text-heading tracking-[0.3px] mb-2">{s.name}</h3>
              <p className="text-sm text-text/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114414.80975306498!2d27.8103507!3d-26.1426924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f5d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRoodepoort!5e0!3m2!1sen!2sza!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Roodepoort service area map"
            className="w-full h-[400px] border-0 block"
          />
        </div>

        <div className="text-center mt-20">
          <div className="inline-block glass-card p-10 max-w-lg mx-auto">
            <h3 className="font-display text-2xl font-black uppercase text-heading mb-3">Not Sure If We Cover Your Area?</h3>
            <p className="text-sm text-text/60 mb-6">Give us a call — we likely do. We cover all of West Rand and surrounding areas.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <a href="tel:+27650724994" className="btn-outline">📞 +27 65 072 4994</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
