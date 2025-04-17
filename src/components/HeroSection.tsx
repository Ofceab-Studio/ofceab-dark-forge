
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 sm:px-6"
    >
      <div 
        className="absolute inset-0 -z-10 bg-ofceab-dark"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(30, 174, 219, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(15, 160, 206, 0.15) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="inline-block">Transformer vos Idées en</span>
          <span className="text-gradient block mt-1">Excellence Numérique</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Nous créons des applications mobiles, des sites web, des solutions backend et des infrastructures cloud exceptionnelles qui propulsent votre entreprise vers l'avant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "400ms" }}>
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-md bg-gradient-ofceab hover:opacity-90 transition-opacity font-medium text-lg"
          >
            Démarrer votre Projet
          </a>
          <a 
            href="#services" 
            className="px-8 py-3 rounded-md border border-ofceab-green/50 hover:bg-ofceab-green/10 transition-colors font-medium text-lg"
          >
            Découvrir nos Services
          </a>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-ofceab-blue hover:text-ofceab-green transition-colors animate-pulse-slow"
      >
        <span className="text-sm mb-2">Défiler vers le bas</span>
        <ArrowDown size={24} />
      </a>
      
      {/* Tech stack indicators */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
            <div className="text-sm md:text-base text-ofceab-gray-light">Flutter</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">React</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">Next.js</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">Node.js</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">Firebase</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">AWS</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">Docker</div>
            <div className="text-sm md:text-base text-ofceab-gray-light">Kubernetes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
