import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-card animate-float">
              <img 
                src="/lovable-uploads/b0a56b9d-85d0-44e9-8e71-46f9eb6d4bc9.png" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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