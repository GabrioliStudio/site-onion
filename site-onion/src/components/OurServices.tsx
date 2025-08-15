import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OurServices = () => {
  const [openService, setOpenService] = useState<number | null>(0);
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      title: "BRANDING",
      description: t('services.branding.description')
    },
    {
      id: "02", 
      title: "BRAND GROWTH",
      description: t('services.digital.description')
    },
    {
      id: "03",
      title: "CONTENT & SOCIAL MEDIA", 
      description: t('services.marketing.description')
    },
    {
      id: "04",
      title: "SITES",
      description: t('services.branding.description')
    },
    {
      id: "05",
      title: "APPS",
      description: t('services.digital.description')
    }
  ];

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className="lg:sticky lg:top-32">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-card">
                <div className="absolute inset-8 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Service Image</span>
                </div>
              </div>    
            </div>
          </div>
          
          {/* Services List */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              {t('services.title')}
            </h2>
            
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="border-b border-border last:border-b-0"
              >
                <button
                  onClick={() => toggleService(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono text-sm">
                      [{service.id}]
                    </span>
                    <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                  </div>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openService === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openService === index && (
                  <div className="pb-6 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Image */}


        </div>
      </div>
    </section>
  );
};

export default OurServices;