import { useState, useEffect } from "react";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      quote: "A equipe da naton transformou completamente a nossa visão digital. O resultado superou todas as expectativas.",
      author: "Guilherme Assante",
      position: "Allanza Solutions"
    },
    {
      quote: "Profissionalismo excepcional e resultados que falam por si. Recomendo sem hesitação.",
      author: "Maria Silva", 
      position: "Tech Innovations"
    },
    {
      quote: "Parceria estratégica que nos levou ao próximo nível. Trabalho impecável em todos os aspectos.",
      author: "João Santos",
      position: "Digital Corp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Depoimentos
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                    <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                      "{review.quote}"
                    </blockquote>
                    
                    <footer className="flex items-center gap-4">
                      <div>
                        <p className="font-semibold text-foreground">
                          {review.author}
                        </p>
                        <p className="text-primary text-sm">
                          {review.position}
                        </p>
                      </div>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;