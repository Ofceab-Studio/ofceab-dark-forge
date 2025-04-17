
import { Smartphone, Globe, Server, Cloud } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

const ServiceCard = ({ icon, title, description, technologies, delay }: ServiceCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-fade-in-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-14 w-14 rounded-lg bg-gradient-ofceab flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="text-xs bg-ofceab-dark px-3 py-1 rounded-full border border-ofceab-blue/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Smartphone size={28} />,
      title: "Mobile App Development",
      description: "Intuitive, high-performance apps for iOS and Android that engage users and deliver seamless experiences.",
      technologies: ["Flutter", "iOS", "Android", "React Native"],
      delay: 100
    },
    {
      icon: <Globe size={28} />,
      title: "Modern Web Development",
      description: "Responsive, fast-loading websites and web applications with stunning UIs and intuitive UX.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      delay: 200
    },
    {
      icon: <Server size={28} />,
      title: "Custom Backends & APIs",
      description: "Scalable, robust backend systems and APIs that power your applications with seamless data flow.",
      technologies: ["Node.js", "Express", "Firebase", "MongoDB"],
      delay: 300
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Infrastructure & DevOps",
      description: "Efficient, secure cloud solutions with CI/CD pipelines for continuous deployment and scaling.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      delay: 400
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 relative">
      <div 
        className="absolute inset-0 -z-10 bg-ofceab-dark"
        style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(15, 160, 206, 0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We deliver end-to-end technology solutions that help businesses innovate, scale, and thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
