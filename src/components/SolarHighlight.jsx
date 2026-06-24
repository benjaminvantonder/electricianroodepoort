export default function SolarHighlight() {
  return (
    <section className="py-32" id="solar">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="glass-card p-12 lg:p-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-xs font-semibold uppercase tracking-[2px] text-accent mb-6">🔋 Backup Power</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-black uppercase text-heading leading-[0.95] tracking-[-1px] mb-5">
              Stay Powered During Load Shedding.
            </h2>
            <p className="text-base text-text/60 leading-relaxed mb-8">
              Inverter installations, battery backup systems, and solar-ready wiring. We keep your home and business running when the grid goes down.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                'Hybrid inverter systems — grid-tied with battery backup',
                'Lithium battery installations (Hubble, Pylontech, Freedom Won)',
                'Solar panel installations for full off-grid capability',
                'Automatic changeover switches for generator integration',
                'Load-shedding proofing for essential circuits',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-text/70">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs text-accent">⚡</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Get a Backup Power Quote</Link>
          </div>

          <div className="flex justify-center items-center">
            <svg viewBox="0 0 400 320" fill="none" className="w-full max-w-[400px] h-auto drop-shadow-[0_0_40px_rgba(245,197,0,0.1)]">
              <rect x="180" y="200" width="40" height="80" rx="2" fill="rgba(255,255,255,0.05)" stroke="#F5C500" strokeWidth="1.5"/>
              <rect x="130" y="220" width="20" height="40" rx="2" fill="rgba(255,255,255,0.03)" stroke="#F5C500" strokeWidth="1"/>
              <rect x="250" y="220" width="20" height="40" rx="2" fill="rgba(255,255,255,0.03)" stroke="#F5C500" strokeWidth="1"/>
              <path d="M200 200 L200 170 L160 170 L160 140" stroke="#F5C500" strokeWidth="1.5" strokeDasharray="4 3"/>
              {[[135,60],[215,60]].map(([x,y],i) => (
                <g key={i}>
                  <rect x={x} y={y} width="50" height="80" rx="2" fill="rgba(245,197,0,0.06)" stroke="#F5C500" strokeWidth="1.5"/>
                  <rect x={x+10} y={y-10} width="30" height="12" rx="1" fill="#F5C500" opacity=".2"/>
                  <path d={`M${x+25} ${y-10} L${x+25} ${y-30}`} stroke="#F5C500" strokeWidth="1.5" strokeDasharray="3 2"/>
                  <circle cx={x+25} cy={y-38} r="8" fill="none" stroke="#F5C500" strokeWidth="1.5"/>
                  <circle cx={x+25} cy={y-38} r="3" fill="#F5C500" opacity=".5"/>
                  {[[0,-8],[0,8],[-8,0],[8,0]].map(([dx,dy]) => (
                    <line key={`${dx}${dy}`} x1={x+25+dx} y1={y-38+dy} x2={x+25+dx*1.5} y2={y-38+dy*1.5} stroke="#F5C500" strokeWidth="1"/>
                  ))}
                  {i===0 && <path d={`M${x+25} ${y-30} L200 ${y-30}`} stroke="#F5C500" strokeWidth="1.5" strokeDasharray="4 3"/>}
                </g>
              ))}
              <path d="M200 170 L240 170 L240 50" stroke="#F5C500" strokeWidth="1.5" strokeDasharray="4 3"/>
              <rect x="180" y="280" width="40" height="10" rx="1" fill="rgba(255,255,255,0.05)" stroke="#F5C500" strokeWidth=".8"/>
              <text x="200" y="310" fill="#C8C8D0" fontFamily="Inter" fontSize="11" textAnchor="middle" opacity=".4">Backup Power System</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
