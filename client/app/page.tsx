import { About, Contact, Hero, Projects } from "@/components";

const HomePage = () => {
  return (
    <div className="grow bg-black">
      {/* Hero Section */}
      <Hero />

      {/* About Section Preview */}
      <About />

      {/* Featured Projects Preview */}
      <Projects />

      {/* Contact Section Preview */}
      <Contact />
    </div>
  );
};

export default HomePage;
