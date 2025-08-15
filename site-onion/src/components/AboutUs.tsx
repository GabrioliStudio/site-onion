import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white h-screen">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="w-full h-full rounded-lg">
              <img src="/lovable-uploads/reference-studio-photo.jpg"  alt="Profile" className="w-full h-full object-cover rounded-lg"/>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 leading-relaxed text-secondary-foreground">
              <p>
                {t('about.description')}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;