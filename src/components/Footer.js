'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/himanshu-mudigonda-09a9ba29b/', icon: FaLinkedin, label: 'LinkedIn', hoverColor: 'hover:text-blue-400' },
    { href: 'https://github.com/mudigondahimanshu', icon: FaGithub, label: 'GitHub', hoverColor: 'hover:text-gray-400' },
    { href: 'mailto:himanshumudigonda@gmail.com', icon: FaEnvelope, label: 'Email', hoverColor: 'hover:text-red-400' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-900 dark:to-black text-white py-16 transition-colors overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Himanshu Mudigonda
            </h2>
            <p className="text-gray-400 max-w-xs">
              Software Developer passionate about building impactful solutions with modern technologies.
            </p>
            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.hoverColor} transition-colors`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>himanshumudigonda@gmail.com</p>
              <p>Hyderabad, India</p>
              <Link
                href="/contact"
                className="inline-block mt-3 px-4 py-2 text-xs font-medium border border-gray-700 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-200"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              &copy; {currentYear} Himanshu Mudigonda. Built with
              <FaHeart className="text-red-500 text-xs" />
              using Next.js
            </p>
            <p className="text-gray-600 text-xs">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
