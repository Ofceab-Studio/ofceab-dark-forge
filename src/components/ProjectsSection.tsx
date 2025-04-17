import { Star } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
  delay: number;
}

const ProjectCard = ({ imageSrc, title, category, delay }: ProjectCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="h-64 bg-ofceab-dark-accent"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ofceab-dark to-transparent opacity-70" />
      <div className="absolute inset-0 bg-ofceab-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 p-6">
        <p className="text-sm text-ofceab-blue font-medium mb-2">{category}</p>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  delay: number;
}

const Testimonial = ({ quote, author, position, company, rating, delay }: TestimonialProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-ofceab-blue text-ofceab-blue" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-400">{position}, {company}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      title: "Application Mobile de Fitness",
      category: "Développement Mobile",
      delay: 100
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      title: "Plateforme E-commerce",
      category: "Développement Web",
      delay: 200
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80",
      title: "Tableau de Bord Cloud",
      category: "DevOps & Cloud",
      delay: 300
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
      title: "Plateforme IoT",
      category: "Backend & APIs",
      delay: 400
    }
  ];

  const testimonials = [
    {
      quote: "Ofceab Studio a livré notre application mobile dans les délais et a dépassé nos attentes. Leur attention aux détails et à l'expérience utilisateur est impressionnante.",
      author: "Alex Thompson",
      position: "Directeur Technique",
      company: "HealthTech Inc.",
      rating: 5,
      delay: 100
    },
    {
      quote: "L'équipe d'Ofceab Studio a construit un système backend robuste qui s'est adapté parfaitement à la croissance de notre base d'utilisateurs. Leur expertise technique est inégalée.",
      author: "Sarah Chen",
      position: "Chef de Produit",
      company: "GrowFast Solutions",
      rating: 5,
      delay: 200
    },
    {
      quote: "Travailler avec Ofceab Studio a transformé notre entreprise. Leur travail sur l'infrastructure cloud nous a fait gagner du temps et de l'argent tout en améliorant les performances.",
      author: "Jordan Miller",
      position: "PDG",
      company: "Innovative Retail",
      rating: 5,
      delay: 300
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div 
        className="absolute inset-0 -z-10 bg-ofceab-dark"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 75%, rgba(30, 174, 219, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Nos Réalisations</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nous avons aidé des entreprises de toutes tailles à transformer leur présence numérique avec des solutions innovantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              category={project.category}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Témoignages Clients</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ne vous fiez pas qu'à notre parole. Voici ce que nos clients disent de leur collaboration avec nous.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
