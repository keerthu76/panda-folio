
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PandaCardProps {
  name: string;
  scientificName: string;
  imageUrl: string;
  habitat: string;
  population: string;
  conservation: string;
  region: string;
  description: string;
}

const PandaCard = ({
  name,
  scientificName,
  imageUrl,
  habitat,
  population,
  conservation,
  region,
  description,
}: PandaCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "rounded-xl overflow-hidden card-gradient shadow-lg transition-all duration-300",
        "hover:shadow-xl group cursor-pointer",
        isExpanded ? "md:scale-105 z-10" : ""
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white text-xl font-bold">{name}</h3>
            <p className="text-white/80 text-sm italic">{scientificName}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-panda-red/90 text-white px-3 py-1 rounded-full text-xs font-medium">
          {conservation}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-panda-bamboo/20 text-panda-bamboo px-3 py-1 rounded-full text-xs">
            {habitat}
          </span>
          <span className="bg-panda-green/20 text-panda-green px-3 py-1 rounded-full text-xs">
            {region}
          </span>
          <span className="bg-panda/10 text-panda px-3 py-1 rounded-full text-xs">
            Population: {population}
          </span>
        </div>
        
        <p className={cn(
          "text-panda/80 text-sm transition-all duration-300",
          isExpanded ? "h-auto" : "line-clamp-2"
        )}>
          {description}
        </p>
        
        {isExpanded && (
          <div className="mt-4 animate-fade-in">
            <a 
              href={`https://en.wikipedia.org/wiki/${name.replace(' ', '_')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-panda-green hover:text-panda-bamboo text-sm font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Learn more on Wikipedia →
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PandaCard;
