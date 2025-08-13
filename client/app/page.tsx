import { About, Hero, Skills } from "@/components";

const HomePage = () => {
  return (
    <div className="grow bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Featured Skills Preview */}
      <Skills />

      {/* About Section Preview */}
      <About />
    </div>
  );
};

export default HomePage;
