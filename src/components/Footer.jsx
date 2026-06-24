import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 bg-white/[0.02] backdrop-blur-2xl border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 font-display text-xl font-extrabold uppercase tracking-[0.5px] text-heading no-underline mb-4">
              <span className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-base">⚡</span>
              Electrician Roodepoort
            </Link>
            <p className="text-sm text-text/60 leading-relaxed max-w-xs">Qualified Electrical Contractors serving Roodepoort and the West Rand. ECB registered, fully insured.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-text/40 mb-5">Navigate</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'Services', to: '/services' },
                { label: 'Service Areas', to: '/areas' },
                { label: 'Contact', to: '/contact' },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-sm text-text/60 hover:text-heading transition-colors no-underline">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-text/40 mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {['DB Board Upgrades', 'Inverter & Solar', 'COC Certificates', 'Emergency Callouts'].map(l => (
                <Link key={l} to="/services" className="text-sm text-text/60 hover:text-heading transition-colors no-underline">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[2px] text-text/40 mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+27650724994" className="text-text/60 hover:text-heading transition-colors no-underline">📞 +27 65 072 4994</a>
              <a href="https://wa.me/27650724994" target="_blank" rel="noopener" className="text-text/60 hover:text-heading transition-colors no-underline">💬 WhatsApp</a>
              <a href="mailto:info@electricianroodepoort.co.za" className="text-text/60 hover:text-heading transition-colors no-underline">✉️ Email Us</a>
              <span className="text-xs text-text/30 font-mono">ECB: Registered</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text/30">
          <span>&copy; 2026 Electrician Roodepoort</span>
          <span>17 Cinderella Street, Florida Park, Roodepoort, 1709</span>
        </div>
      </div>
    </footer>
  )
}
