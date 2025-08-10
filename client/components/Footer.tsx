"use client";

import {
  Github,
  Linkedin,
  Twitter,
  ArrowUp,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      color: "hover:text-gray-300 hover:bg-gray-800/80 hover:border-gray-600",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      color:
        "hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      color: "hover:text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/30",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,64,64,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(64,64,64,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      </div>

      {/* Subtle Glow Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-4">
                Youssef <span className="text-sky-400">Hussein</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full-Stack Web Developer crafting scalable, production-ready
                applications with modern technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Let&apos;s Connect
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ready to bring your ideas to life? I&apos;m available for
              freelance projects and exciting collaborations.
            </p>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-black rounded-full font-bold hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Youssef Hussein. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-400 hidden sm:inline" />
              <span className="hidden sm:inline">in Egypt</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button (Mobile) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 lg:hidden w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-black shadow-2xl shadow-sky-500/30 hover:scale-110 transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
