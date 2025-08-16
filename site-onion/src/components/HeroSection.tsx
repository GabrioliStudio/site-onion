import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-black-hero flex items-center relative overflow-hidden">
      <div className="w-full h-screen px-[40px] flex flex-col gap-20 pb-[50px] justify-end">


        <div className="flex flex-col itens-end relative">

          <div className="hero-badge-bg bg-white absolute top-[12%]">
            <div className="hero-badge"></div>
          </div>

          <div className="w-full">
            <h1 className="hero-title text-foreground leading-tight whitespace-pre-line">
              {t('hero.title')}
            </h1>
          </div>

        </div>

        <div className="flex flex-col gap-[20px]">
          <p className="text-sm text-muted-foreground whitespace-pre-line">
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