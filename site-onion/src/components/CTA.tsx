import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="px-[40px] bg-white h-screen grid items-center">
      <div className="p-[20px] border border-border text-center bg-white gap-[40px] rounded-lg">

        <div className="p-[40px] bg-[url('/lovable-uploads/background.png')] bg-cover bg-center bg-no-repeat gap-[40px]
         rounded-lg">

          <div className="flex flex-col items-center gap-[20px] mb-[40px]">
          <img src="/lovable-uploads/cta-logo.svg" alt="" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-[90%] whitespace-pre-line">
            {"Grandes marcas não construídas por acaso.\nVamos construir a sua?"}
          </h2>
          </div>


          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full"
          >
            Começar projeto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;