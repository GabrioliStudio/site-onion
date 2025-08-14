import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen bg-black-hero flex items-center relative overflow-hidden">
      <div className="w-full text-left mx-[40px] flex flex-col gap-10">

        <div className="w-full">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-foreground mb-8 leading-tight whitespace-pre-line">
            {t('hero.title')}
          </h1>          
        </div>

          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('hero.copy')}
          </p>
        <div className="h-[1px] bg-white w-full"></div>

          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('hero.subtitle')}
          </p>
      </div>
    </section>
  );
};

export default HeroSection;