import { ChevronDown, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-pattern flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-800/50 to-black py-16"
    >
      {/* Subtle Glow Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 glass glass-hover shadow-glow-sky rounded-full">
            <Star className="w-4 h-4 text-yellow-400 mr-3" />
            <span className="text-sky-400 text-sm font-medium tracking-wide">
              Ready to transform ideas into digital reality
            </span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 animate-fade-in-up animation-delay-200 leading-tight">
          Hi, {"I'm"}
          <span className="block text-gradient-sky">Youssef Hussein</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          Visionary Full-Stack Developer crafting next-generation applications that push the boundaries of what&apos;s possible. 
          I transform complex problems into elegant, scalable solutions using cutting-edge technologies.
        </p>

        {/* Enhanced Stats */}
        <div className="flex flex-wrap justify-center gap-12 text-center animate-fade-in-up animation-delay-800 mb-12">
          <div className="group hover-lift">
            <div className="text-4xl font-black text-sky-400 group-hover:scale-110 transition-transform duration-300">
              3+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Years of Innovation
            </div>
          </div>
          <div className="group hover-lift">
            <div className="text-4xl font-black text-blue-400 group-hover:scale-110 transition-transform duration-300">
              25+
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Digital Masterpieces
            </div>
          </div>
          <div className="group hover-lift">
            <div className="text-4xl font-black text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Client Delight
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
