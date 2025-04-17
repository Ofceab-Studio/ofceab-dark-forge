
import { Zap, Award, BarChart, Users } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-5 items-start animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-ofceab flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Équipe Experte",
      description: "Notre équipe est composée de développeurs et d'ingénieurs hautement qualifiés avec des années d'expérience dans la création de solutions numériques exceptionnelles.",
      delay: 100
    },
    {
      icon: <Zap size={24} />,
      title: "Obsédés par la Performance",
      description: "Nous construisons des applications ultra-rapides optimisées pour la vitesse, l'efficacité et une expérience utilisateur fluide sur tous les appareils.",
      delay: 200
    },
    {
      icon: <BarChart size={24} />,
      title: "Approche Basée sur les Données",
      description: "Nous utilisons l'analyse et les métriques pour prendre des décisions éclairées et améliorer continuellement vos produits numériques.",
      delay: 300
    },
    {
      icon: <Users size={24} />,
      title: "Processus Collaboratif",
      description: "Nous travaillons en étroite collaboration avec vous à chaque étape, assurant la transparence et alignant nos solutions sur vos objectifs commerciaux.",
      delay: 400
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-ofceab-blue/5 blur-[100px] -top-[250px] -right-[250px]" />
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-ofceab-teal/5 blur-[100px] -bottom-[250px] -left-[250px]" />
      
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi Choisir <span className="text-gradient">Ofceab Studio</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Nous ne nous contentons pas de créer des logiciels ; nous créons des expériences numériques qui stimulent la croissance de votre entreprise et la satisfaction des utilisateurs. Notre engagement envers l'excellence nous distingue.
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 lg:p-10 animate-fade-in">
            <div className="bg-ofceab-dark rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Notre Approche</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium">Découverte</h4>
                    <p className="text-sm text-gray-400">Comprendre vos besoins et objectifs commerciaux</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium">Conception</h4>
                    <p className="text-sm text-gray-400">Créer le plan de votre solution numérique</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium">Développement</h4>
                    <p className="text-sm text-gray-400">Construire des solutions robustes, évolutives et maintenables</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium">Déploiement</h4>
                    <p className="text-sm text-gray-400">Lancer votre solution avec des tests approfondis</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <h4 className="font-medium">Support</h4>
                    <p className="text-sm text-gray-400">Fournir une maintenance et des améliorations continues</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold mb-3">Prêt à démarrer votre projet ?</h4>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 rounded-md bg-gradient-ofceab hover:opacity-90 transition-opacity font-medium"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
