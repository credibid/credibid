import React from 'react';
import NavbarIII from '../components/navbar/NavbarIII';
import Footer from '../components/footer/footer';
import PartnerSection from '../components/partnerSection/PartnerSection';
import Hero from '../components/heroSection/hero';
import HowItWorks from '../components/howItWorks/howItWorks';

const LandingPage = () => {
  return (
    <div>
      <NavbarIII></NavbarIII>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <PartnerSection></PartnerSection>
      <Footer></Footer>
    </div>
  );
};

export default LandingPage;
