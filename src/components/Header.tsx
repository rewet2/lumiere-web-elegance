
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-cafe-cream">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-cafe-darkbrown">
              Caffè <span className="text-cafe-gold italic">Aurora</span>
            </h1>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="block md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-cafe-darkbrown" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300">Home</a>
          <a href="#about" className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300">Chi Siamo</a>
          <a href="#menu" className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300">Menu</a>
          <a href="#gallery" className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300">Galleria</a>
        </nav>
      </div>

      {/* Mobile navigation */}
      <div 
        className={`md:hidden bg-white border-b border-cafe-cream ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Chi Siamo
          </a>
          <a 
            href="#menu" 
            className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </a>
          <a 
            href="#gallery" 
            className="text-cafe-darkbrown hover:text-cafe-gold transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Galleria
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
