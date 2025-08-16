import { Code, Rocket, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            About <span className="text-gradient-sky">Me</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Computer Engineering graduate from Helwan University with an
            insatiable passion for creating revolutionary web solutions and
            AI-powered applications that reshape the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group card hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend Expertise
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Expert in React.js, Next.js, Redux, and TailwindCSS, I design
              visually stunning, SEO-optimized, and fully responsive user
              interfaces. I excel at UI/UX design, crafting intuitive and
              engaging digital experiences that delight users. My approach
              ensures exceptional user experiences, lightning-fast performance,
              and enhanced discoverability.
            </p>
          </div>

          <div className="group card hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Backend Development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I engineer resilient, scalable backend systems and APIs using
              Node.js, Bun, Express.js, JavaScript, TypeScript, MySQL, and
              MongoDB—delivering high-performance solutions that effortlessly
              support millions of users. My expertise extends to DevOps, where I
              implement CI/CD pipelines, automate deployments, and orchestrate
              cloud infrastructure to ensure smooth, reliable, and continuous
              delivery.
            </p>
          </div>

          <div className="group card hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI &amp; Generative AI Integration
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I specialize in integrating generative AI models directly into web
              applications, enabling the creation of intelligent, interactive,
              and creative digital experiences that redefine user expectations.
              Additionally, I am skilled in building neural networks with
              TensorFlow and Keras, further enhancing the capabilities of modern
              web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
