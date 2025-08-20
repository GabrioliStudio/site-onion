import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === "PT"  ? "EN" : "PT");

  const menuItems = [
    { label: t('nav.homepage'), href: "/" },
    { label: t('nav.ourwork'), href: "/work" },
    { label: t('nav.shop'), href: "/shop" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-screen z-50 bg-transparent">
        <div className="flex mx-[40px]">
          <div className="flex w-full justify-between items-center">
            <div className="text-foreground font-bold text-xl">
              Onion
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors"
              >

                <p className="text-sm">MENU</p>
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="px-[40px] py-4">
            <div className="flex justify-between items-center mb-16">
              <div className="text-foreground font-bold text-xl">
                Onion
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors"
              >
                <p className="text-sm">FECHAR</p>
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="flex flex-col min-h-[70vh]">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-4xl md:text-6xl font-bold text-foreground hover:text-primary transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;