
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
      title: "Expert Team",
      description: "Our team consists of highly skilled developers and engineers with years of experience delivering exceptional digital solutions.",
      delay: 100
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Obsessed",
      description: "We build lightning-fast applications optimized for speed, efficiency, and seamless user experience across all devices.",
      delay: 200
    },
    {
      icon: <BarChart size={24} />,
      title: "Data-Driven Approach",
      description: "We leverage analytics and metrics to make informed decisions and continuously improve your digital products.",
      delay: 300
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Process",
      description: "We work closely with you at every stage, ensuring transparency and aligning our solutions with your business goals.",
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
              Why Choose <span className="text-gradient">Ofceab Studio</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              We don't just build software; we create digital experiences that drive business growth and user satisfaction. Our commitment to excellence sets us apart.
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
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium">Discover</h4>
                    <p className="text-sm text-gray-400">Understanding your business needs and objectives</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium">Design</h4>
                    <p className="text-sm text-gray-400">Creating the blueprint for your digital solution</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium">Develop</h4>
                    <p className="text-sm text-gray-400">Building robust, scalable, and maintainable solutions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-medium">Deploy</h4>
                    <p className="text-sm text-gray-400">Launching your solution with thorough testing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-ofceab flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <h4 className="font-medium">Support</h4>
                    <p className="text-sm text-gray-400">Providing ongoing maintenance and improvements</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="font-bold mb-3">Ready to start your project?</h4>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 rounded-md bg-gradient-ofceab hover:opacity-90 transition-opacity font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
