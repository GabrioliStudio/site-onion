import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === "PT" ? "EN" : "PT");

  const menuItems = [
    { label: t('nav.homepage'), href: "/" },
    { label: t('nav.ourwork'), href: "/work" },
    { label: t('nav.shop'), href: "/shop" },
    { label: t('nav.contact'), href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-foreground font-bold text-xl">
              naton
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
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center mb-16">
              <div className="text-foreground font-bold text-xl">
                naton
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-[70vh]">
              <nav className="space-y-8">
                {menuItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-4xl md:text-6xl font-bold text-foreground hover:text-primary transition-all duration-300 text-center"
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