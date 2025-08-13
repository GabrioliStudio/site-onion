import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-tight whitespace-pre-line">
            {t('hero.title')}
          </h1>
          
          {/* Video placeholder element positioned in the text */}
          <div className="flex justify-center my-16">
            <div className="relative">
              <div className="w-80 h-48 md:w-96 md:h-56 bg-muted rounded-lg shadow-glow animate-glow flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Video Placeholder</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;