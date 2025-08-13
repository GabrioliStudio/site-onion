const Projects = () => {
  const projects = [
    {
      title: "Brand Identity",
      category: "Branding",
      image: "bg-gradient-to-br from-red-500 to-pink-500"
    },
    {
      title: "Mobile App",
      category: "Development", 
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projetos selecionados
          </h2>
          
          <button className="text-primary hover:text-primary/80 transition-colors text-sm uppercase tracking-wider">
            Ver todos os projetos
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className={`aspect-[4/3] ${project.image} transition-transform duration-500 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-primary text-sm uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;