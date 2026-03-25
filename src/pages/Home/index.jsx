import Hero from '../../components/sections/Hero'
import VerifiedHuman from '../../components/sections/VerifiedHuman'
import TrustedBy from '../../components/sections/TrustedBy'
import HowItWorks from '../../components/sections/HowItWorks'
import SendAnywhere from '../../components/sections/SendAnywhere'
import UseCases from '../../components/sections/UseCases'
import Testimonials from '../../components/sections/Testimonials'
import OrgBenefits from '../../components/sections/OrgBenefits'
import BottomCTA from '../../components/sections/BottomCTA'
import GetStarted from '../../components/sections/GetStarted'

export default function HomePage() {
  return (
    <>
      <Hero />
      <VerifiedHuman />
      <TrustedBy />
      <HowItWorks />
      <SendAnywhere />
      <UseCases />
      <Testimonials />
      <OrgBenefits />
      <BottomCTA />
      {/* <GetStarted /> */}
    </>
  )
}
