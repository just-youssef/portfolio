import { ChevronDown, Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="section-pattern flex flex-col items-center justify-center bg-gradient-to-bl from-black via-gray-800/50 to-black py-16 mt-20 gap-12 relative"
    >
      <div className="inline-flex z-20 items-center px-6 py-3 glass glass-hover shadow-glow-sky rounded-full animate-fade-in-up">
        <Star className="w-4 h-4 text-yellow-400 mr-3" />
        <span className="text-sky-400 text-sm font-medium tracking-wide">
          Ready to transform ideas into digital reality
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-6 max-w-7xl mx-auto flex max-lg:flex-col justify-between items-center gap-12">
        <div className="flex flex-col gap-y-8">
          <h1 className="text-6xl md:text-8xl font-black text-white animate-fade-in-up animation-delay-200 leading-tight">
            Hi, {"I'm"}
            <span className="block text-gradient-sky">Youssef Hussein</span>
          </h1>

          <div className="flex gap-x-6">
            <div className="w-[5px] shrink-0 bg-gradient-to-b from-blue-400 to-indigo-500 animate-pulse rounded-full" />
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              Visionary Full-Stack Developer crafting next-generation
              applications that push the boundaries of what&apos;s possible. I
              transform complex problems into elegant, scalable solutions using
              cutting-edge technologies.
            </p>
          </div>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`/${encodeURIComponent("Youssef Hussein Ahmed.pdf")}`}
            className="btn-primary w-fit text-lg flex items-center gap-x-2 animate-fade-in-up animation-delay-600"
          >
            <Download className="w-6 h-6" />
            Download Resume
          </Link>
        </div>

        <Image
          src="/profile.png"
          alt="Hero"
          width={400}
          height={400}
          className="object-contain aspect-square animate-fade-in-up animation-delay-400 rounded-full"
        />
      </div>

      {/* Enhanced Stats */}
      <div className="flex flex-wrap justify-center gap-12 text-center animate-fade-in-up animation-delay-800">
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

      {/* Scroll Indicator */}
      <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce" />
    </section>
  );
};

export default Hero;
