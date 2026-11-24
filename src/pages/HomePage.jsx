import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import StatsBand from '../components/home/StatsBand';
import CategoryShowcase from '../components/home/CategoryShowcase';
import TradeJourney from '../components/home/TradeJourney';
import WhyChooseUs from '../components/home/WhyChooseUs';
import { Expertise, Pillars } from '../components/home/Expertise';
import CtaBand from '../components/ui/CtaBand';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Shipyon — South India’s Premier Trade & Export Company';
  }, []);

  return (
    <>
      <Hero />
      <StatsBand />
      <CategoryShowcase />
      <TradeJourney />
      <WhyChooseUs />
      <Expertise />
      <Pillars />
      <CtaBand />
    </>
  );
}