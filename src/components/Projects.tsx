import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Symptom Solver -   Disease diagnosis using NLP",
      description: "Symptom Solver is an AI-based tool that predicts diseases by analyzing user-entered symptoms using NLP. It provides not only possible diagnoses but also natural treatments and precautionary measures. A smart step toward early, informed, and holistic healthcare guidance..",
      technologies: ["React","Tailwind CSS", "NLP", "ML",  "Gemini API","TF-IDF","Flask"],
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      githubUrl: "https://github.com/gopireddy99/Symptom_Solver---Disease_diagnosis_using_NLP.git",
      liveUrl: "https://ecommerce-demo.netlify.app"
    },
    {
      title: "Recipe Finder",
      description: "Recipe Finder is a smart web application that helps users discover delicious recipes by simply entering the ingredients they have. Built with TypeScript, Tailwind CSS, and Python, it offers an intuitive interface and intelligent recipe suggestions based on user input.",
      technologies: ["React", "TypeScript", "Tailwind", "FastAPI", "SpoonacularAPI","Beautifulsoup"],
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
      githubUrl: "https://github.com/gopireddy99/Receipe_Finder.git",
      liveUrl: "https://taskflow-app.netlify.app"
    },
    {
      title: "Universal Language Translator",
      description: "A simple web application that translates text between 50+ languages.It uses intelligent language models for automated and accurate text generation across languages.Designed to break language barriers and enable seamless global communication.",
      technologies: ["JavaScript", "React", "mymemory API", "Generative AI" ],
      image: "https://miro.medium.com/v2/resize:fit:1400/0*tAHPEZg9biCMwC-d.gif",
      githubUrl: "https://github.com/gopireddy99/Universal_Language_Translator.git",
      liveUrl: "https://weather-insights.netlify.app"
    },
    {
      title: "Youtube Video Summarizer",
      description: "A web application that gives you summary of an Youtube Video by Entering URL of video .",
      technologies: ["React", "Python", "FastAPI", "Summarizer", "uvicorn", ],
      image: "https://images.pexels.com/photos/5077064/pexels-photo-5077064.jpeg",
      githubUrl: "https://github.com/gopireddy99/Youtube_Video_Summarizer.git",
      liveUrl: "https://financetracker-demo.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical skills and creativity through practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                      <Github className="text-gray-800" size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                      <ExternalLink className="text-gray-800" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <Code2 className="text-blue-600 flex-shrink-0" size={24} />
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;