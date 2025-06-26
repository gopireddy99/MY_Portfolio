import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nithish Kumar Reddy</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Driven by a passion for AI and technology, focused on building intelligent and impactful solutions.
              Always eager to learn and grow in the tech industry.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gopireddy99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nithish-kumar-gopireddy-3a477429b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gopireddynithishkumar@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Education', 'Projects', 'Skills', 'Certifications', 'Resume'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400">Email</p>
                <a
                  href="gopireddynithishkumar@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors duration-200"
                >
                  gopireddynithishkumar@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-white">Hyderabad, Telangana</p>
              </div>
              <div>
                <p className="text-gray-400">Status</p>
                <p className="text-green-400">Available for opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} NKR. Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;