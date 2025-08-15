import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen bg-black-hero flex items-center relative overflow-hidden">
      <div className="w-full text-left mx-[40px] flex flex-col">
        

        <div className="flex flex-col itens-end relative">

        <div className="hero-badge-bg bg-white absolute top-[10%]">
          <div className="hero-badge"></div>
        </div>

        <div className="w-full">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-foreground mb-8 leading-tight whitespace-pre">
            {t('hero.title')}
          </h1>          
        </div>

        </div>

          <div className="flex flex-col gap-8">
          <p className="text-sm text-muted-foreground whitespace-pre">
            {t('hero.copy')}
          </p>
        <div className="h-[1px] bg-white w-full"></div>

          <p className="text-sm, md:text text-muted-foreground whitespace-pre">
            {t('hero.subtitle')}
          </p>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;