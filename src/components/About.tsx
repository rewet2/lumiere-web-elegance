
import React from 'react';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="section-padding bg-cafe-cream/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cafe-darkbrown mb-4">
            Chi Siamo
          </h2>
          <div className="flex justify-center">
            <Separator className="w-24 h-1 bg-cafe-gold" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <div className="rounded-lg overflow-hidden h-[400px]">
              <img 
                src="/placeholder.svg" 
                alt="Interno di Caffè Aurora" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <h3 className="font-playfair text-2xl md:text-3xl text-cafe-darkbrown mb-6">
              La Nostra Storia
            </h3>
            <p className="mb-6 text-lg">
              Fondato nel 2010 nel cuore della città, Caffè Aurora nasce dalla passione per il caffè di alta qualità 
              e dall'amore per l'accoglienza italiana. Il nostro locale unisce l'eleganza di un caffè tradizionale con 
              un tocco di modernità, creando un ambiente unico dove il tempo sembra rallentare.
            </p>
            <p className="mb-6 text-lg">
              Ogni dettaglio di Caffè Aurora è stato pensato per offrire un'esperienza sensoriale completa: 
              dall'aroma del caffè appena macinato, alla selezione musicale, fino all'illuminazione soffusa 
              che crea un'atmosfera intima e accogliente.
            </p>
            <p className="text-lg">
              La nostra filosofia è semplice: ingredienti di prima qualità, preparazioni curate con maestria e 
              un servizio attento alle esigenze di ogni cliente. Vi aspettiamo per condividere con voi la nostra 
              passione per l'eccellenza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
