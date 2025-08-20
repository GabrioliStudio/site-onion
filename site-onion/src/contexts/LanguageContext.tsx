import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'PT' | 'EN';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  PT: {
    // Navbar
    'nav.homepage': '[01] Homepage',
    'nav.ourwork': '[02] Nosso Trabalho',
    'nav.shop': '[03] Loja',
    'nav.contact': '[04] Contato',
    
    // Hero Section
    'hero.title': 'Não seguimos\ntendências, criamos\ndireções.',
    'hero.copy': '©  Chandresh Uike',
    'hero.subtitle': 'Onion é uma empresa de\nBranding e Estratégia, baseada\nem São Paulo — SP',
    
    // About Section
    'about.title': 'Sobre nós',
    'about.description': 'Somos um estúdio de design multidisciplinar, situado em São Paulo.\n\nTemos como produto principal o gerenciamento de marcas, atuando desde o princípio de sua criação até o\ndesenvolvimento de campanhas completas.\n\nEstamos aqui porque acreditamos que cada marca carrega uma narrativa, uma história que a torna única e nosso\npapel aqui é fazer com que essa história seja contada e garantir que todas as empresas que passarem por nossa\ncuradoria conquistem seu espaço e deixem sua marca.',

    // manifesto
    'manifesto.title': 'Manifesto',
    'manifesto.description': 'Marcas crescem com direção.\n\nDireção exige estratégia. Conectamos propósito, posicionamento e estratégia através do design. Porque marcas \nrespiram cultura e comportamento.\n\nPreparamos marcas para evoluir, engajar e crescer. Somos o elo entre a ambição e a realização. \nPorque crescer é uma escolha.\n\n Não seguimos tendências, criamos direções.',

    // Services Section
    'services.title': 'Nossos Serviços',
    'services.branding.title': 'Branding & Identidade Visual',
    'services.branding.description': 'Criamos identidades visuais únicas que refletem a essência da sua marca e conectam com seu público.',
    'services.digital.title': 'Design Digital',
    'services.digital.description': 'Desenvolvemos interfaces intuitivas e experiências digitais que encantam e convertem usuários.',
    'services.marketing.title': 'Marketing Visual',
    'services.marketing.description': 'Criamos campanhas visuais impactantes que amplificam sua mensagem e geram resultados.',
    
    // Partners
    'partners.title': 'Confiados por líderes, transformamos o futuro',
    
    // Projects
    'projects.title': 'Projetos em Destaque',
    'projects.view': 'Ver Projeto',
    
    // Reviews
    'reviews.title': 'O que nossos clientes dizem',
    
    // CTA
    'cta.title': 'Pronto para transformar sua marca?',
    'cta.subtitle': 'Entre em contato conosco e vamos criar algo incrível juntos.',
    'cta.button': 'Iniciar Projeto',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.social': 'Redes Sociais',
    'footer.rights': '© 2024 Naton. Todos os direitos reservados.',
  },
  EN: {
    // Navbar
    'nav.homepage': '[01] Homepage',
    'nav.ourwork': '[02] Our Work',
    'nav.shop': '[03] Shop',
    'nav.contact': '[04] Contact',
    
    // Hero Section
    'hero.title': 'CREATIVITY\nTHAT TRANSFORMS\nIDEAS INTO\nREALITY',
    'hero.subtitle': 'We are a creative agency specialized in transforming concepts into extraordinary visual experiences.',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'We are a team passionate about design and innovation. Our mission is to create unique digital experiences that connect brands to their audiences in an authentic and impactful way.',
    
    
    // Services Section
    'services.title': 'Our Services',
    'services.branding.title': 'Branding & Visual Identity',
    'services.branding.description': 'We create unique visual identities that reflect your brand essence and connect with your audience.',
    'services.digital.title': 'Digital Design',
    'services.digital.description': 'We develop intuitive interfaces and digital experiences that delight and convert users.',
    'services.marketing.title': 'Visual Marketing',
    'services.marketing.description': 'We create impactful visual campaigns that amplify your message and generate results.',
    
    // Partners
    'partners.title': 'Our Partners',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Project',
    
    // Reviews
    'reviews.title': 'What our clients say',
    
    // CTA
    'cta.title': 'Ready to transform your brand?',
    'cta.subtitle': 'Contact us and let\'s create something amazing together.',
    'cta.button': 'Start Project',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.social': 'Social Media',
    'footer.rights': '© 2024 Naton. All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('PT');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};