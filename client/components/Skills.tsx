"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroup {
  name: string;
  skills: Skill[];
}

const groupedSkills: SkillGroup[] = [
  // Frontend Skills
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "React.js", icon: "/reactjs.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
      { name: "HTML5", icon: "/html5.svg" },
      { name: "CSS3", icon: "/css3.svg" },
      { name: "Sass", icon: "/sass.svg" },
    ],
  },

  // Backend Skills
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "/nodejs.svg" },
      { name: "Bun", icon: "/bun.svg" },
      { name: "Express.js", icon: "/expressjs.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "Redis", icon: "/redis.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "AWS", icon: "/aws.svg" },
      { name: "Hostinger", icon: "/hostinger.svg" },
    ],
  },

  // Other Skills
  {
    name: "Others",
    skills: [
      { name: "Python", icon: "/python.svg" },
      { name: "TensorFlow", icon: "/tensorflow.svg" },
      { name: "Keras", icon: "/keras.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "GitHub", icon: "/github.svg" },
      { name: "Linux", icon: "/linux.svg" },
      { name: "Ubuntu", icon: "/ubuntu.svg" },
      { name: "Cursor", icon: "/cursor.svg" },
      { name: "Claude", icon: "/claude.svg" },
    ],
  },
];

const SkillRow = ({
  title,
  skills,
  scrollDirection = "left",
}: {
  title: string;
  skills: Skill[];
  scrollDirection?: "left" | "right";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollSpeed = 0.2; // pixels per frame
    let animationId: number;
    let currentScroll =
      scrollDirection === "left" ? 0 : container.scrollWidth / 2;

    const animate = () => {
      if (scrollDirection === "left") {
        currentScroll += scrollSpeed;
        // Reset to beginning when reaching the middle for seamless loop
        if (currentScroll >= container.scrollWidth / 2) {
          currentScroll = 0;
        }
      } else {
        currentScroll -= scrollSpeed;
        // Reset to middle when reaching the beginning for seamless loop
        if (currentScroll <= 0) {
          currentScroll = container.scrollWidth / 2;
        }
      }

      container.scrollLeft = currentScroll;
      animationId = requestAnimationFrame(animate);
    };

    // Pause animation on hover
    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };

    const resumeAnimation = () => {
      // Use current scroll position when resuming
      currentScroll = container.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", pauseAnimation);
    container.addEventListener("mouseleave", resumeAnimation);

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", pauseAnimation);
      container.removeEventListener("mouseleave", resumeAnimation);
    };
  }, [scrollDirection]);

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-bold text-white mb-4 text-center">
        {title}
      </h3>

      {/* Skills Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Duplicate skills for seamless circular scrolling */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex gap-x-2 items-center justify-center group/skill min-w-40"
          >
            <div className="relative w-10 h-10">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain shrink-0"
                priority
              />
            </div>

            <span className="text-gray-300 text-sm font-medium text-center group-hover/skill:text-white transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-800/50 backdrop-blur-md border-t border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            Commanding mastery of revolutionary technologies that define the
            digital frontier. From orchestrating pixel-perfect user experiences
            to engineering bulletproof backend architectures, I infuse every
            line of code with innovation, precision, and the relentless pursuit
            of excellence.
          </p>
        </div>

        <div className="space-y-16">
          {groupedSkills.map((group, index) => (
            <SkillRow
              key={index}
              title={group.name}
              skills={group.skills}
              scrollDirection={index % 2 == 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
