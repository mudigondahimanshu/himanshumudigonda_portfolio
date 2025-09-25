import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-gray-800 text-white py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Himanshu Mudigonda</h2>
            <p className="text-gray-300">Software Developer</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/skills" className="text-gray-300 hover:text-white">Skills</Link></li>
                <li><Link href="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.linkedin.com/in/himanshu-mudigonda-09a9ba29b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/mudigondahimanshu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub size={24} />
                </a>
                <a href="mailto:himanshumudigonda@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Himanshu Mudigonda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
