import React from 'react';

import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Process from '../components/process';
import WhyChooseUs from '../components/whychooseus';
import ContactForm from '../components/contactform';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <ContactForm />
    </>
  );
}