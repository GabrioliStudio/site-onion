import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FixedBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openContact = () => {
    // Add contact functionality here
    console.log("Opening contact...");
  };

  return (
    <div className="fixed right-[40px] bottom-[40px] z-40 flex flex-row gap-3">
      <Button
        onClick={openContact}
        size="icon"
        className="w-full px-[20px] rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
        <small>Fale conosco</small>
      </Button>
      
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        className="w-full px-[20px] rounded-full border-border bg-card/80 text-foreground shadow-card"
      >
        <small>Voltar ao topo</small>
      </Button>
    </div>
  );
};

export default FixedBar;