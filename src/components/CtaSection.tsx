
const CtaSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-ofceab-dark to-ofceab-dark-accent" />
      <div className="absolute -z-10 w-[600px] h-[600px] rounded-full bg-ofceab-blue/5 blur-[120px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à <span className="text-gradient">Transformer</span> Votre Présence Numérique ?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discutons de la façon dont Ofceab Studio peut vous aider à concrétiser vos idées avec des solutions technologiques de pointe.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-ofceab-dark border border-ofceab-gray-dark/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ofceab-blue/50"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-ofceab-dark border border-ofceab-gray-dark/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ofceab-blue/50"
                  placeholder="Votre email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-ofceab-dark border border-ofceab-gray-dark/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ofceab-blue/50"
                placeholder="Type de projet ou demande"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-ofceab-dark border border-ofceab-gray-dark/50 rounded-md focus:outline-none focus:ring-2 focus:ring-ofceab-blue/50 resize-none"
                placeholder="Parlez-nous de votre projet ou de votre question"
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-md bg-gradient-ofceab hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Envoyer le Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
