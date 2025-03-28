
import { useState } from 'react';

const HabitatMap = () => {
  const [activeHabitat, setActiveHabitat] = useState<string | null>(null);
  
  const habitats = [
    {
      id: 'china',
      name: 'China',
      species: ['Giant Panda', 'Qinling Panda'],
      coordinates: { x: 75, y: 42 },
      description: 'Central China is home to the Giant Panda, primarily in Sichuan Province, as well as parts of Shaanxi and Gansu provinces. The Qinling Mountains harbor the unique brown and white Qinling Panda subspecies.'
    },
    {
      id: 'himalaya',
      name: 'Eastern Himalayas',
      species: ['Red Panda'],
      coordinates: { x: 70, y: 47 },
      description: 'The Eastern Himalayas, including parts of Nepal, Bhutan, India, Myanmar, and southern China, are home to the Red Panda. They inhabit temperate forests with bamboo undergrowth at elevations of 2,200-4,800 meters.'
    },
    {
      id: 'tibet',
      name: 'Tibetan Plateau',
      species: ['Tibetan Blue Bear'],
      coordinates: { x: 68, y: 40 },
      description: 'The Tibetan Plateau is home to the extremely rare Tibetan Blue Bear. These bears live in high-altitude alpine meadows and mountain ranges, often above 4,000 meters elevation.'
    }
  ];

  return (
    <section id="habitats" className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-panda-green font-medium">GLOBAL DISTRIBUTION</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Panda Habitats</h2>
          <p className="max-w-2xl mx-auto text-panda/70">
            Pandas are found in specific regions across Asia. Explore the map to learn about where different panda species live.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <div className="relative p-4 md:p-0">
            {/* Map Container */}
            <div className="relative w-full h-[400px] md:h-[600px] bg-[#F8F8F8] overflow-hidden rounded-lg">
              <img 
                src="https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop" 
                alt="Map of Asia" 
                className="w-full h-full object-cover"
              />
              
              {/* Habitat Markers */}
              {habitats.map((habitat) => (
                <div 
                  key={habitat.id}
                  className="absolute cursor-pointer transition-transform duration-300 hover:scale-110"
                  style={{ 
                    left: `${habitat.coordinates.x}%`, 
                    top: `${habitat.coordinates.y}%` 
                  }}
                  onClick={() => setActiveHabitat(habitat.id)}
                >
                  <div 
                    className={`map-marker bg-panda-green border-2 ${activeHabitat === habitat.id ? 'border-white scale-110' : 'border-transparent'}`}
                  ></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
                    <span className="bg-panda-green text-white text-xs py-1 px-2 rounded pointer-events-none">
                      {habitat.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Habitat Information Panel */}
            {activeHabitat && (
              <div className="md:absolute md:right-8 md:top-8 w-full md:w-80 bg-white p-6 rounded-lg shadow-lg mt-4 md:mt-0 animate-fade-in">
                {habitats.filter(h => h.id === activeHabitat).map(habitat => (
                  <div key={habitat.id}>
                    <h3 className="font-bold text-lg mb-2">{habitat.name}</h3>
                    <div className="mb-3">
                      <span className="text-sm font-medium">Species found here:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {habitat.species.map(species => (
                          <span key={species} className="bg-panda-green/10 text-panda-green text-xs px-2 py-1 rounded-full">
                            {species}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-panda/80">{habitat.description}</p>
                    <button 
                      className="text-panda-green hover:text-panda-bamboo text-sm mt-4 font-medium"
                      onClick={() => setActiveHabitat(null)}
                    >
                      Close
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabitatMap;
