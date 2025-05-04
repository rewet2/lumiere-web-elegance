
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const MenuCategory = ({ title, items }) => {
  return (
    <div className="mb-16">
      <h3 className="font-playfair text-2xl font-semibold text-cafe-darkbrown mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="opacity-0 animate-fade-in hover-lift bg-white rounded-lg p-6 shadow-sm border border-cafe-cream"
            style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards'}}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-playfair text-xl font-semibold text-cafe-brown">{item.name}</h4>
              <span className="font-semibold text-cafe-gold">€{item.price.toFixed(2)}</span>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("coffee");

  const coffeeItems = [
    {
      name: "Espresso Aurora",
      price: 2.50,
      description: "Il nostro espresso signature, tostatura media con note di cioccolato e frutta secca."
    },
    {
      name: "Cappuccino Classico",
      price: 3.50,
      description: "Espresso con latte montato a velluto e una spolverata di cacao."
    },
    {
      name: "Caffè Mocha",
      price: 4.00,
      description: "Espresso, cioccolato fondente e latte montato, decorato con cacao."
    },
    {
      name: "Marocchino",
      price: 3.00,
      description: "Espresso con un tocco di cacao e schiuma di latte."
    },
  ];

  const cocktailItems = [
    {
      name: "Aurora Spritz",
      price: 8.00,
      description: "Il nostro spritz speciale con Aperol, prosecco, acqua frizzante e un twist di arancia."
    },
    {
      name: "Negroni Invecchiato",
      price: 10.00,
      description: "Gin, Campari e vermouth rosso invecchiati in botte, servito con scorza d'arancia."
    },
    {
      name: "Milano Mule",
      price: 9.00,
      description: "Vodka, succo di lime fresco, ginger beer e un rametto di rosmarino."
    },
    {
      name: "Caffè Martini",
      price: 9.50,
      description: "Vodka, liquore al caffè e un shot di espresso fresco."
    },
  ];

  const foodItems = [
    {
      name: "Croissant Artigianale",
      price: 3.50,
      description: "Fragrante croissant fatto in casa, disponibile in versione classica o con ripieno."
    },
    {
      name: "Tramezzino Aurora",
      price: 6.50,
      description: "Pane soffice con prosciutto crudo, rucola, pomodorini e crema di avocado."
    },
    {
      name: "Tagliere di Formaggi",
      price: 14.00,
      description: "Selezione di formaggi locali serviti con miele, noci e pane casereccio."
    },
    {
      name: "Insalata Mediterranea",
      price: 9.00,
      description: "Insalata fresca con pomodorini, olive, feta, cipolla rossa e origano."
    },
  ];

  return (
    <section id="menu" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cafe-darkbrown mb-4">
            Il Nostro Menu
          </h2>
          <div className="flex justify-center">
            <Separator className="w-24 h-1 bg-cafe-gold" />
          </div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground">
            Una selezione curata di caffè premium, cocktail innovativi e deliziosi stuzzichini, 
            preparati con ingredienti di prima qualità.
          </p>
        </div>
        
        <Tabs defaultValue="coffee" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger 
                value="coffee"
                className={activeTab === "coffee" ? "text-cafe-gold" : ""}
              >
                Caffè
              </TabsTrigger>
              <TabsTrigger 
                value="cocktails"
                className={activeTab === "cocktails" ? "text-cafe-gold" : ""}
              >
                Cocktail
              </TabsTrigger>
              <TabsTrigger 
                value="food"
                className={activeTab === "food" ? "text-cafe-gold" : ""}
              >
                Stuzzichini
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="coffee">
            <MenuCategory title="Caffè & Specialità" items={coffeeItems} />
          </TabsContent>
          
          <TabsContent value="cocktails">
            <MenuCategory title="Cocktail Signature" items={cocktailItems} />
          </TabsContent>
          
          <TabsContent value="food">
            <MenuCategory title="Dolci & Salati" items={foodItems} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
