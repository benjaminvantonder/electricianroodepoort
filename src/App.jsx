import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AreasPage from './pages/AreasPage'
import ContactPage from './pages/ContactPage'

function AppRoutes() {
  const navigate = useNavigate()

  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect')
    if (redirect) {
      sessionStorage.removeItem('redirect')
      const path = redirect.replace(/^https?:\/\/[^/]+(\/electricianroodepoort)?/, '')
      if (path && path !== '/') {
        navigate(path, { replace: true })
      }
    }
  }, [navigate])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/areas" element={<AreasPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return <AppRoutes />
}
