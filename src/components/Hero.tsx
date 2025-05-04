
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative bg-cafe-darkbrown min-h-[85vh] flex items-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/placeholder.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom text-center text-white">
        <div className="max-w-3xl mx-auto opacity-0 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Caffè <span className="text-cafe-gold italic">Aurora</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cafe-lightcream">
            Dove ogni sorso racconta una storia di passione e tradizione
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cafe-gold hover:bg-cafe-gold/90 text-white border-0 px-8 py-6 text-lg">
              Scopri il Menu
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-cafe-darkbrown px-8 py-6 text-lg">
              Prenota un Tavolo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
