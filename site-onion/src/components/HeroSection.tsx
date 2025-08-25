import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-[url('/lovable-uploads/background.png')] bg-cover bg-center bg-no-repeat flex items-center relative overflow-hidden">
      <div className="w-full h-screen px-[40px] flex flex-col py-[40px] justify-end">

          <div className="w-full mb-[80px]">
            <h1 className="text-[7.5vw] sm:text-[8w] md:text-[9vw] xl:text-[10.2vw] leading-[90%] whitespace-pre-line">
              {t('hero.title')}
            </h1>
          </div>

        <div className="flex flex-col gap-[20px]">
          <small className="text-muted-foreground whitespace-pre-line text-[10px]">
            {t('hero.copy')}
          </small>

          <div className="h-[1px] bg-white w-full"></div>

          <p className="text-sm, md:text text-muted-foreground whitespace-pre leading-[102%] text-[16px]">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;