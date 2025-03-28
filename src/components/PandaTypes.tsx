
import PandaCard from './PandaCard';

const PandaTypes = () => {
  const pandas = [
    {
      name: "Giant Panda",
      scientificName: "Ailuropoda melanoleuca",
      imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
      habitat: "Temperate Forest",
      population: "1,864 in the wild",
      conservation: "Vulnerable",
      region: "Southwest China",
      description: "The giant panda, with its distinctive black and white coat, is adored by the world and considered a national treasure in China. They primarily eat bamboo and must consume 26-84 pounds of it daily. Giant pandas have a sixth 'thumb' (actually an extension of the wrist bone) which helps them grip bamboo.",
    }
  ];

  return (
    <section id="panda-types" className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-panda-green font-medium">LEARN ABOUT</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Panda Species & Subspecies</h2>
          <p className="max-w-2xl mx-auto text-panda/70">
            Discover the diverse world of pandas, from the iconic Giant Panda to the lesser-known species and subspecies that share our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
          {pandas.map((panda) => (
            <PandaCard key={panda.name} {...panda} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PandaTypes;
