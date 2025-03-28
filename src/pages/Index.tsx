
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PandaTypes from '@/components/PandaTypes';
import HabitatMap from '@/components/HabitatMap';
import Conservation from '@/components/Conservation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <PandaTypes />
      <HabitatMap />
      <Conservation />
      <Footer />
    </div>
  );
};

export default Index;
