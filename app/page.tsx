import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import JobsSection from './components/JobsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <JobsSection />
      <ContactSection />
    </>
  );
}
