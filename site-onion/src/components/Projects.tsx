const Projects = () => {
  const projects = [
    {
      title: "Brand Identity",
      category: "Branding",
      image: "bg-white"
    },
    {
      title: "Mobile App",
      category: "Development", 
      image: "bg-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="w-full px-[40px]">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projetos selecionados
          </h2>
          
          <button className="text-primary transition-colors text-sm uppercase tracking-wider">
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
                <div className={`aspect-[4/2] ${project.image} bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,1)_100%)] opacity-70 transition-transform duration-500 group-hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className=" text-sm uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-semibold text-foreground transition-colors">
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