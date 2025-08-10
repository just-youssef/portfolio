import { Code, Rocket, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            About <span className="text-sky-400">Me</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Computer Engineering graduate from Helwan University with a passion
            for creating innovative web solutions and AI-powered applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group p-10 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend Expertise
            </h3>
            <p className="text-gray-400 leading-relaxed">
              React.js, Next.js, Redux, TailwindCSS for modern, responsive
              interfaces that deliver exceptional user experiences.
            </p>
          </div>

          <div className="group p-10 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Backend Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Node.js, Express.js, MongoDB, PHP for robust server-side solutions
              that power scalable applications.
            </p>
          </div>

          <div className="group p-10 rounded-3xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-black/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI & ML</h3>
            <p className="text-gray-400 leading-relaxed">
              TensorFlow, Keras, OpenCV for intelligent application features
              that push the boundaries of what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
