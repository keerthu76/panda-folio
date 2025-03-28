
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Panda Types', href: '#panda-types' },
    { name: 'Habitats', href: '#habitats' },
    { name: 'Conservation', href: '#conservation' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-panda-green">Panda<span className="text-panda">Info</span></span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="link-underline font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-panda"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="py-2 hover:text-panda-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
