
import { useState } from 'react';
import { cn } from '@/lib/utils';

const Conservation = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const conservationData = [
    {
      title: "Protection Efforts",
      icon: "🛡️",
      content: "Governments and conservation organizations have established numerous protected areas and wildlife reserves specifically for pandas. China has created over 60 panda reserves, covering approximately 70% of the wild panda population. These areas are strictly monitored to prevent poaching and habitat destruction.",
      stats: [
        { value: "67", label: "Panda reserves" },
        { value: "70%", label: "Wild pandas protected" },
        { value: "4M+", label: "Acres preserved" }
      ]
    },
    {
      title: "Breeding Programs",
      icon: "🧬",
      content: "Captive breeding programs have played a crucial role in increasing panda populations. The China Conservation and Research Center for the Giant Panda has developed advanced breeding techniques and has successfully bred over 300 pandas in captivity. Many of these pandas participate in reintroduction programs designed to bolster wild populations.",
      stats: [
        { value: "300+", label: "Pandas bred in captivity" },
        { value: "63", label: "Successful reintroductions" },
        { value: "95%", label: "Survival rate" }
      ]
    },
    {
      title: "Habitat Restoration",
      icon: "🌱",
      content: "Restoring and connecting fragmented habitat is essential for panda survival. Conservation groups work to plant bamboo and native trees in degraded areas, creating corridors between isolated panda populations. These efforts also benefit countless other species that share the pandas' ecosystem, making pandas true 'umbrella species' for conservation.",
      stats: [
        { value: "1.2M", label: "Bamboo plants grown" },
        { value: "37", label: "Habitat corridors created" },
        { value: "490+", label: "Other species protected" }
      ]
    }
  ];

  return (
    <section id="conservation" className="py-24 bg-panda-green/5">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-panda-green font-medium">SAVING PANDAS</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Conservation Initiatives</h2>
          <p className="max-w-2xl mx-auto text-panda/70">
            Discover the global efforts to protect panda species and their habitats for future generations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {conservationData.map((item, index) => (
            <button
              key={item.title}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-colors",
                activeTab === index 
                  ? "bg-panda-green text-white" 
                  : "bg-white hover:bg-panda-green/10"
              )}
              onClick={() => setActiveTab(index)}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {conservationData.map((item, index) => (
            <div 
              key={item.title}
              className={cn(
                "p-8 transition-opacity duration-300",
                activeTab === index ? "block opacity-100" : "hidden opacity-0"
              )}
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-panda/80 mb-8 max-w-3xl">{item.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {item.stats.map((stat) => (
                  <div key={stat.label} className="bg-panda-green/5 rounded-lg p-6 text-center">
                    <span className="block text-3xl font-bold text-panda-green mb-2">{stat.value}</span>
                    <span className="text-sm text-panda/70">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a 
                  href="https://www.worldwildlife.org/species/giant-panda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-panda-green hover:text-panda-bamboo font-medium transition-colors"
                >
                  Learn more about panda conservation →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conservation;
