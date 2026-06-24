import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Services from '../components/Services'
import SolarHighlight from '../components/SolarHighlight'
import WhyUs from '../components/WhyUs'
import Areas from '../components/Areas'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative -mt-20 pb-8">
        <TrustBar />
      </div>
      <Services />
      <SolarHighlight />
      <WhyUs />
      <Areas />
      <Testimonials />
      <Contact />
    </>
  )
}
