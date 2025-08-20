import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="px-[40px] bg-white h-full py-20">
      <div className=" w-full">
        <div className="flex flex-col xl:flex-row gap-12 items-center">

          <div className="space-y-6">
            <div className="w-full h-full rounded-lg">
              <img src="/lovable-uploads/reference-studio-photo.jpg" alt="Profile" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          <div className="space-y-6 h-full p-[40px] flex flex-col space-between border border-border rounded-lg">

            <div className="flex flex-col gap-4 h-full">

              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
                {t('manifesto.title')}
              </h2>

              <div className="h-[1px] bg-background w-full"></div>

              <div className="space-y-4 leading-relaxed text-secondary-foreground whitespace-pre-line">
                <p>
                  {t('manifesto.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 h-full">

              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
                {t('about.title')}
              </h2>

              <div className="h-[1px] bg-background w-full"></div>

              <div className="space-y-4 leading-relaxed text-secondary-foreground whitespace-pre-line">
                <p>
                  {t('about.description')}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;