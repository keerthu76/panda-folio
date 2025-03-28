
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-end pb-24 pt-32">
        <div className={cn(
          "max-w-2xl transition-all duration-1000 ease-out transform",
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the World of Pandas
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore detailed information about different panda species, 
            their habitats, and conservation efforts around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#panda-types" 
              className="bg-panda-green hover:bg-panda-green/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
            >
              Explore Panda Types
            </a>
            <a 
              href="#conservation" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
            >
              Learn About Conservation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
