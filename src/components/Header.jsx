import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Areas', to: '/areas' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) => {
    if (to === '/') return pathname === '/'
    return pathname.startsWith(to)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-0 transition-colors">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[80px]">
          <Link to="/" className="flex items-center gap-3 font-display text-xl font-extrabold uppercase tracking-[0.5px] text-heading no-underline">
            <span className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center text-base">⚡</span>
            Electrician Roodepoort
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-[1px] transition-all duration-300 rounded-lg no-underline ${
                  isActive(l.to)
                    ? 'text-accent bg-accent/10'
                    : 'text-text/80 hover:text-heading hover:bg-white/[0.04]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+27650724994" className="ml-4 inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded-lg font-bold text-xs tracking-[0.5px] hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(245,197,0,0.3)] no-underline">
              📞 Call Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-1 cursor-pointer"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span
                key={i}
                className={`block w-[26px] h-[2.5px] bg-heading rounded transition-all duration-300 ${
                  open
                    ? i === 0 ? 'rotate-45 translate-y-[5px]' : i === 1 ? 'opacity-0' : '-rotate-45 translate-y-[-5px]'
                    : ''
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      <div className={`fixed inset-x-0 top-[80px] bottom-0 z-40 bg-bg/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-transform duration-350 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map(l => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={`font-display text-4xl font-extrabold uppercase tracking-[2px] no-underline transition-colors ${
              isActive(l.to) ? 'text-accent' : 'text-heading'
            }`}
          >
            {l.label}
          </Link>
        ))}
        <a href="tel:+27650724994" onClick={() => setOpen(false)} className="btn-primary text-lg mt-4 no-underline">
          📞 Call Now
        </a>
      </div>
    </>
  )
}
