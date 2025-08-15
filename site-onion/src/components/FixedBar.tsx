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
    <div className="fixed right-6 bottom-6 z-40 flex flex-row gap-3">
      <Button
        onClick={openContact}
        size="icon"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <MessageCircle className="w-5 h-5" />
      </Button>
      
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        className="w-12 h-12 rounded-full border-border bg-card/80 text-foreground shadow-card"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default FixedBar;