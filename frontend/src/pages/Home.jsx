import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Trust } from '../components/Trust';
// import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Charity } from '../components/charity';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
// import { LiveChat } from '../components/LiveChat';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solution />
      <Problem />
      <Services />
      <HowItWorks />
      <Trust />
      <Charity />
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
      <Footer />
      {/* <LiveChat /> */}
    </div>
  );
};
