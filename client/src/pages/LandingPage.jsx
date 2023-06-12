import React from 'react'
import Navbar from '../components/navbar/navbar'
import NavbarII from '../components/navbar/NavbarII'
import NavbarIII from '../components/navbar/NavbarIII'
import Footer from '../components/footer/footer'
import PartnerSection from '../components/partnerSection/PartnerSection'
import PartnerSectionII from '../components/partnerSection/PartnerSectionII'
import Hero from '../components/heroSection/hero'

const LandingPage = () => {
  return (
    <div>
        {/* <Navbar /> */}
        {/* <NavbarII/> */}
        <NavbarIII></NavbarIII>
        <Hero></Hero>
        <PartnerSection></PartnerSection>
        {/* <PartnerSectionII></PartnerSectionII> */}
        <Footer></Footer>
    </div>
  )
}

export default LandingPage