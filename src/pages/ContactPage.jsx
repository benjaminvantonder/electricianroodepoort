export default function ContactPage() {
  return (
    <div className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[640px] mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">📞 Get in Touch</span>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-black uppercase text-heading leading-[0.92] tracking-[-1.5px] mb-5">
            Get Your Free Electrical Quote
          </h1>
          <p className="text-base text-text/60 leading-relaxed">
            Call, WhatsApp, or fill in the form. We respond to all quote requests within 2 hours during business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form className="lg:col-span-3 glass-card p-8 lg:p-10 flex flex-col gap-5" action="#" method="POST">
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" name="name" placeholder="Your Name" required
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-heading placeholder:text-text/30 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05]" />
              <input type="tel" name="phone" placeholder="Phone Number" required
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-heading placeholder:text-text/30 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="email" name="email" placeholder="Email Address"
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-heading placeholder:text-text/30 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05]" />
              <select name="service" required
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-heading outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05]">
                <option value="" disabled selected className="bg-bg">Select Service</option>
                {['DB Board Upgrade','Fault Finding','Inverter / Solar','Generator Connection','COC Certificate','Rewiring','Emergency Callout','Commercial','Other'].map(s => (
                  <option key={s} value={s.toLowerCase().replace(/\s+/g,'-')} className="bg-bg">{s}</option>
                ))}
              </select>
            </div>
            <textarea name="message" placeholder="Describe your electrical need..." required
              className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-heading placeholder:text-text/30 outline-none transition-all duration-300 focus:border-accent/50 focus:bg-white/[0.05] min-h-[140px] resize-y" />
            <button type="submit" className="btn-primary justify-center text-base">Send Quote Request</button>
            <p className="text-xs text-text/30 italic">We respond to all quote requests within 2 hours during business hours.</p>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="glass-card p-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[2px] text-text/40 mb-1">📞 Call Us</div>
              <a href="tel:+27650724994" className="font-mono text-[clamp(1.5rem,2.5vw,2rem)] text-accent font-semibold no-underline hover:text-accent-hover transition-colors">+27 65 072 4994</a>
              <div className="w-full h-px bg-white/[0.04]" />
              <div className="flex items-center gap-3 text-sm text-text/60"><span className="text-base">✉️</span> info@electricianroodepoort.co.za</div>
              <div className="flex items-center gap-3 text-sm text-text/60"><span className="text-base">📍</span> 17 Cinderella Street, Florida Park, Roodepoort, 1709</div>
              <div className="flex items-center gap-3 text-sm text-text/60"><span className="text-base">🕐</span> 24/7 Emergency Service · Open 365 days</div>
              <a href="https://wa.me/27650724994" target="_blank" rel="noopener" className="btn-whatsapp justify-center mt-2">
                <WhatsAppIcon /> WhatsApp Us Now
              </a>
            </div>
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.8695!3d-26.1689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f5d5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s17+Cinderella+St%2C+Florida+Park%2C+Roodepoort%2C+1709!5e0!3m2!1sen!2sza!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Electrician Roodepoort location map"
                className="w-full h-[240px] border-0 block"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 glass-card p-8 lg:p-10 text-center">
          <div className="font-display text-2xl font-black uppercase text-heading mb-3">⚡ Emergency?</div>
          <p className="text-sm text-text/60 mb-6 max-w-lg mx-auto">We offer 24/7 emergency callouts across the West Rand. Call now for same-day response.</p>
          <a href="tel:+27650724994" className="btn-primary text-xl font-mono">📞 +27 65 072 4994</a>
        </div>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
