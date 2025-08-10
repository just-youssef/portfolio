import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            A showcase of my recent work, from financial platforms to AI-powered
            applications that demonstrate technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-sky-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 backdrop-blur-sm">
            <div className="p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">
                  El-Safqa Platform
                </h3>
                <div className="flex space-x-3">
                  <span className="px-4 py-2 bg-sky-500/20 text-sky-400 rounded-full text-sm font-semibold border border-sky-500/30">
                    MERN
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold border border-green-500/30">
                    Production
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Financial consultancy platform for Saudi stock market investors
                with real-time data and analytics.
              </p>
              <div className="flex items-center text-sky-400 group-hover:text-white transition-colors duration-300 font-semibold">
                <span className="mr-3 text-lg">View Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
            <div className="p-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-white">LEVI Robot</h3>
                <div className="flex space-x-3">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold border border-blue-500/30">
                    AI/ML
                  </span>
                  <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30">
                    95% Grade
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Intelligent assistant robot for children with ASD, featuring
                deep learning models and Flutter interface.
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-white transition-colors duration-300 font-semibold">
                <span className="mr-3 text-lg">View Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
