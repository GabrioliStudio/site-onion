import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="px-[40px] bg-white h-screen grid items-center">
      <div className="w-full py-[40px] px-[40px] border border-border text-center bg-white gap-[40px] rounded-lg">

        <div className="py-[40px] px-[40px] bg-[url('/lovable-uploads/background.png')] bg-cover bg-center bg-no-repeat gap-[40px] flex flex-wrap rounded-lg">
        <img src="/lovable-uploads/cta-logo.svg" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[90%] whitespace-pre-line">
            {"Grandes marcas não construídas por acaso.\nVamos construir a sua?"}
          </h2>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-glow"
          >
            Começar projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;