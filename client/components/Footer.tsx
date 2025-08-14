"use client";

import { EMAIL, GITHUB, LINKEDIN, PHONE } from "@/constants";
import { Github, Linkedin, ArrowUp, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: GITHUB,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: LINKEDIN,
      icon: Linkedin,
    },
  ];

  const contactLinks = [
    {
      name: "Email",
      text: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
    },
    {
      name: "Phone",
      text: PHONE,
      href: `tel:${PHONE}`,
      icon: Phone,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="section-pattern bg-gray-800/50 backdrop-blur-md border-t border-gray-800/50"
    >
      {/* Subtle Glow Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-gray-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-white mb-4">
                Youssef <span className="text-gradient-sky">Hussein</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Visionary Full-Stack Web Developer crafting revolutionary,
                production-ready applications that redefine industry standards
                with cutting-edge technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mb-4">
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

          {/* Newsletter/CTA */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold text-white mb-6">
              Let&apos;s Connect
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Ready to bring your boldest ideas to life? I&apos;m available for
              groundbreaking freelance projects and transformative
              collaborations that change the world.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              {contactLinks.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  className="flex items-center px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:border-gray-600 shadow-lg shadow-black/30"
                >
                  <contact.icon className="w-5 h-5 mr-3" />
                  {contact.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8 border-t border-gray-800/50">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Youssef Hussein. All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="max-lg:hidden group flex items-center space-x-2 px-4 py-2 glass glass-hover hover-lift rounded-full"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Floating Scroll to Top Button (Mobile) */}
          <button
            onClick={scrollToTop}
            className="lg:hidden w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-black shadow-2xl shadow-sky-500/30 hover:scale-110 transition-all duration-300 z-40"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
