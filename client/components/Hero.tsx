import { ArrowRight, ChevronDown, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,64,64,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(64,64,64,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Subtle Glow Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 mb-8 shadow-2xl shadow-black/50">
            <Star className="w-4 h-4 text-sky-400 mr-3" />
            <span className="text-sky-400 text-sm font-medium tracking-wide">
              Available for new opportunities
            </span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in-up animation-delay-200 leading-tight">
          Hi, {"I'm"}
          <span className="block bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Youssef Hussein
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          Full-Stack Web Developer crafting{" "}
          <span className="text-sky-400 font-bold">scalable</span>,{" "}
          <span className="text-blue-400 font-bold">production-ready</span>{" "}
          applications with the MERN stack and modern technologies
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in-up animation-delay-600">
          <button className="group px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-black rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 transform hover:-translate-y-1">
            View My Work
            <ArrowRight className="inline w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </button>
          <button className="px-10 py-5 border-2 border-gray-600 text-white rounded-full font-bold text-lg backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1">
            Download CV
          </button>
        </div>

        {/* Enhanced Stats */}
        <div className="flex flex-wrap justify-center gap-12 text-center animate-fade-in-up animation-delay-800">
          <div className="group">
            <div className="text-4xl font-black text-sky-400 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Years Experience
            </div>
          </div>
          <div className="group">
            <div className="text-4xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Projects Completed
            </div>
          </div>
          <div className="group">
            <div className="text-4xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Client Satisfaction
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
