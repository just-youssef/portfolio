"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { EMAIL, GITHUB, LINKEDIN, PHONE } from "@/constants";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: GITHUB, icon: Github },
    { name: "LinkedIn", href: LINKEDIN, icon: Linkedin },
    { name: "Email", href: `mailto:${EMAIL}`, icon: Mail },
    { name: "Phone", href: `tel:${PHONE}`, icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 glass backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-black/50`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/code.svg"
                alt="Portfolio Logo"
                fill
                className="object-contain shrink-0"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Youssef Hussein</h1>
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                Full-Stack Developer
              </p>
            </div>
          </Link>

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

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className={`group relative w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30`}
                {...(social.href.startsWith("https") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <social.icon className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
            }}
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
                  className={`group relative w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/30`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
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
          zIndex: -10,
        }}
      />
    </header>
  );
};

export default Header;
