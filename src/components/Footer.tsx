
import { Link } from 'react-router-dom';

const Footer = () => {
  const resourceLinks = [
    { name: "World Wildlife Fund", url: "https://www.worldwildlife.org/species/giant-panda" },
    { name: "Smithsonian's National Zoo", url: "https://nationalzoo.si.edu/animals/giant-panda" },
    { name: "International Union for Conservation of Nature", url: "https://www.iucnredlist.org" },
    { name: "Chengdu Research Base", url: "https://www.panda.org.cn/english/" },
    { name: "Red Panda Network", url: "https://www.redpandanetwork.org/" },
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Panda Types", url: "#panda-types" },
    { name: "Habitats", url: "#habitats" },
    { name: "Conservation", url: "#conservation" },
    { name: "Resources", url: "#resources" },
  ];

  return (
    <footer id="resources" className="bg-panda py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-white">Panda<span className="text-panda-green">Info</span></span>
            </a>
            <p className="text-white/70 mb-6">
              Dedicated to sharing knowledge about panda species around the world and supporting conservation efforts to protect these magnificent animals.
            </p>
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} PandaInfo. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-white/70 hover:text-panda-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Panda Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-panda-green transition-colors"
                  >
                    {link.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
