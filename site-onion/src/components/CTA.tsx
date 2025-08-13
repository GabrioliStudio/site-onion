import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Grandes marcas não são criadas por acaso.
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Vamos construir a sua?
          </p>
          
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-glow"
          >
            Começar projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;