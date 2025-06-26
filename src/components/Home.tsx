import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const scrollToNext = () => {
    const element = document.getElementById('education');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Profile Photo */}
          <img
            src="/MY.jpg" // <-- Replace with your actual image path or URL
            alt="Nithish Kumar Reddy"
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg object-cover border-4 border-white"
          />

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Nithish Kumar Reddy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Aspiring AI & ML Enthusiast
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Passionate about building intelligent solutions that solve real-world problems. Skilled in Python, machine learning, data science, and web development. Eager to learn, innovate, and contribute to cutting-edge projects in a collaborative and growth-oriented environment.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:gopireddynithishkumar@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>
          <a
            href="https://github.com/gopireddy99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/nithish-kumar-gopireddy-3a477429b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        <button
          onClick={scrollToNext}
          className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Home;
