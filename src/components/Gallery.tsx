
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const galleryImages = [
  {
    src: '/placeholder.svg',
    alt: 'Interno del caffè Aurora',
    category: 'ambiente'
  },
  {
    src: '/placeholder.svg',
    alt: 'Preparazione di un cappuccino',
    category: 'drink'
  },
  {
    src: '/placeholder.svg',
    alt: 'Tavolino all\'aperto',
    category: 'ambiente'
  },
  {
    src: '/placeholder.svg',
    alt: 'Cocktail signature',
    category: 'drink'
  },
  {
    src: '/placeholder.svg',
    alt: 'Clienti al bancone',
    category: 'clienti'
  },
  {
    src: '/placeholder.svg',
    alt: 'Un espresso perfetto',
    category: 'drink'
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-cafe-cream/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cafe-darkbrown mb-4">
            Galleria
          </h2>
          <div className="flex justify-center">
            <Separator className="w-24 h-1 bg-cafe-gold" />
          </div>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'all' 
                  ? 'bg-cafe-darkbrown text-white' 
                  : 'bg-white border border-cafe-darkbrown text-cafe-darkbrown hover:bg-cafe-cream/50'
              }`}
            >
              Tutti
            </button>
            <button 
              onClick={() => setFilter('ambiente')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'ambiente' 
                  ? 'bg-cafe-darkbrown text-white' 
                  : 'bg-white border border-cafe-darkbrown text-cafe-darkbrown hover:bg-cafe-cream/50'
              }`}
            >
              Ambiente
            </button>
            <button 
              onClick={() => setFilter('drink')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'drink' 
                  ? 'bg-cafe-darkbrown text-white' 
                  : 'bg-white border border-cafe-darkbrown text-cafe-darkbrown hover:bg-cafe-cream/50'
              }`}
            >
              Drink
            </button>
            <button 
              onClick={() => setFilter('clienti')}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === 'clienti' 
                  ? 'bg-cafe-darkbrown text-white' 
                  : 'bg-white border border-cafe-darkbrown text-cafe-darkbrown hover:bg-cafe-cream/50'
              }`}
            >
              Clienti
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="opacity-0 animate-fade-in cursor-pointer rounded-lg overflow-hidden h-80 hover-lift"
                  style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards'}}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
