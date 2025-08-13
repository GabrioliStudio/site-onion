import { useLanguage } from "@/contexts/LanguageContext";

const PartnersBadge = () => {
  const { t } = useLanguage();
  const partners = [
    "Meta", "Google", "Adobe", "Microsoft", "Apple", "Netflix", "Spotify", "Tesla"
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center text-primary-foreground">
          <p className="text-sm uppercase tracking-wider font-semibold mb-6">
            {t('partners.title')}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={partner}
                className="text-primary-foreground/80 font-semibold text-lg hover:text-primary-foreground transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersBadge;