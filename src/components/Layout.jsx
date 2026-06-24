import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(245,197,0,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 30%, rgba(245,197,0,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 70% 40% at 50% 70%, rgba(245,197,0,0.04) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(200,200,208,0.02) 0%, transparent 40%),
            #0C0C0F
          `,
        }}
      />

      <Header />
      <main className="relative z-10 pt-[80px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
