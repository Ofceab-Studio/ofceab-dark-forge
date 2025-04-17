import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-ofceab-dark-accent pt-16 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gradient">Ofceab Studio</span>
            </a>
            <p className="text-gray-300 mb-6 max-w-md">
              Nous créons des solutions numériques innovantes qui aident les entreprises à prospérer dans l'environnement concurrentiel d'aujourd'hui.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-ofceab-dark rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ofceab-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-ofceab-dark rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ofceab-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-ofceab-dark rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ofceab-blue transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-ofceab-dark rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-ofceab-blue transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Développement Mobile</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Développement Web</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Backend & APIs</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Cloud & DevOps</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-ofceab-blue mt-1 flex-shrink-0" />
                <a href="mailto:contact@ofceabstudio.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@ofceabstudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-ofceab-blue mt-1 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ofceab-blue mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Tech Street, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ofceab-gray-dark/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {year} Ofceab Studio. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
