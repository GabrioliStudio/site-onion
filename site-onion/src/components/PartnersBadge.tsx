import { useLanguage } from "@/contexts/LanguageContext";

const PartnersBadge = () => {
  const { t } = useLanguage();
  const partners = [
    "Planar", "Alamino", "Brisee", "MGA", "Bunnie's"
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="px-[40px]">
        <div className="flex flex-col md:flex-row text-primary-foreground gap-12">
          <p className=" text-3xl md:text-4xl font-bold">
            {t('partners.title')}
          </p>
          
          <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
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