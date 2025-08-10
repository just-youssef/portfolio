"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <Image
                src="/favicon.ico"
                alt="Portfolio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Youssef Hussein</h1>
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-black rounded-full font-bold hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="py-6 border-t border-gray-800/50">
              {/* Mobile Navigation Items */}
              <nav className="space-y-4 mb-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2 border-l-2 border-transparent hover:border-sky-400 pl-4"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-black rounded-full font-bold hover:scale-105 transition-all duration-300">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-300"
        style={{
          width: isScrolled ? "100%" : "0%",
          opacity: isScrolled ? 1 : 0,
          zIndex: -10
        }}
      />
    </header>
  );
};

export default Header;
