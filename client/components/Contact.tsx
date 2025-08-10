import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
          {"Let's Work"} <span className="text-sky-400">Together</span>
        </h2>
        <p className="text-gray-300 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? {"I'm"} available for freelance
          projects, full-time opportunities, and exciting collaborations.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <a
            href="mailto:youssef.hussein.ahmed.hussein@gmail.com"
            className="flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:border-gray-600 shadow-lg shadow-black/30"
          >
            <Mail className="w-5 h-5 mr-3" />
            youssef.hussein.ahmed.hussein@gmail.com
          </a>
          <div className="flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white shadow-lg shadow-black/30">
            <Phone className="w-5 h-5 mr-3" />
            +201099675840
          </div>
          <div className="flex items-center px-8 py-4 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white shadow-lg shadow-black/30">
            <MapPin className="w-5 h-5 mr-3" />
            Haram, Giza, Egypt
          </div>
        </div>

        <button className="px-12 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-black rounded-full font-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/40 transform hover:-translate-y-1">
          Get In Touch
          <ArrowRight className="inline w-6 h-6 ml-3" />
        </button>
      </div>
    </section>
  );
};

export default Contact;
