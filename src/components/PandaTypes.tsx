
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
    },
    {
      name: "Red Panda",
      scientificName: "Ailurus fulgens",
      imageUrl: "https://images.unsplash.com/photo-1519066629447-267fffa62d4b?q=80&w=2034&auto=format&fit=crop",
      habitat: "Temperate Forest",
      population: "Less than 10,000 in the wild",
      conservation: "Endangered",
      region: "Eastern Himalayas",
      description: "The red panda is slightly larger than a domestic cat with a long, bushy tail. Despite its name and some shared characteristics, it's not closely related to the giant panda. Red pandas are excellent climbers and spend most of their time in trees. Their reddish-brown fur provides camouflage with the red moss and white lichens that cover the trees of their habitat.",
    },
    {
      name: "Qinling Panda",
      scientificName: "Ailuropoda melanoleuca qinlingensis",
      imageUrl: "https://www.ngenespanol.com/wp-content/uploads/2022/12/panda-de-qinling-la-subespecie-de-oso-cafe-y-blanco-en-peligro-de-extincion-770x541.jpg",
      habitat: "Mountain Forest",
      population: "Around 300 in the wild",
      conservation: "Endangered",
      region: "Qinling Mountains, China",
      description: "The Qinling panda is a subspecies of the giant panda that has a dark brown and light brown coat instead of the typical black and white. They are found only in the Qinling Mountains of China's Shaanxi Province. They have smaller skulls than other giant pandas and tend to eat more foods beyond bamboo compared to their black and white relatives.",
    },
    {
      name: "Tibetan Blue Bear",
      scientificName: "Ursus arctos pruinosus",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Blue_Bear_1.jpg/1200px-Blue_Bear_1.jpg",
      habitat: "Alpine Meadows",
      population: "Unknown, very rare",
      conservation: "Critically Endangered",
      region: "Tibetan Plateau",
      description: "Sometimes called the Horse Bear or Blue Bear, this rare subspecies of brown bear has bluish-black fur with white tips. They are one of the rarest bear subspecies in the world, and very little is known about them. They are sometimes thought to be the inspiration for the Yeti legend. Unlike giant pandas, they are omnivores that eat a variety of plants and animals.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pandas.map((panda) => (
            <PandaCard key={panda.name} {...panda} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PandaTypes;
