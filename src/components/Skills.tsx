import React from 'react';
import { Code, Database, Wrench, Users, Lightbulb, MessageSquare, Brain, Clock, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-blue-600" size={32} />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="text-green-600" size={32} />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React (basics)", level: 65 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-purple-600" size={32} />,
      skills: [
        { name: "Scikit-learn", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Keras", level: 70 }
      ]
    },
    {
      title: "Data Science",
      icon: <Database className="text-orange-600" size={32} />,
      skills: [
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "Seaborn", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-red-600" size={32} />,
      skills: [
        { name: "MySQL", level: 75 },
        { name: "MongoDB (basics)", level: 60 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-gray-600" size={32} />,
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Jupyter Notebook", level: 80 }
      ]
    },
    {
      title: "NLP",
      icon: <MessageSquare className="text-indigo-600" size={32} />,
      skills: [
        { name: "NLTK", level: 70 },
        { name: "spaCy", level: 65 },
        { name: "Hugging Face (basics)", level: 60 }
      ]
    },
    {
      title: "APIs",
      icon: <Target className="text-teal-600" size={32} />,
      skills: [
        { name: "REST API basics", level: 70 },
        { name: "OpenAI API", level: 65 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: <Lightbulb className="text-yellow-600" size={24} />,
      title: "Problem Solving",
      description: "Strong analytical thinking and creative approach to complex challenges"
    },
    {
      icon: <Brain className="text-purple-600" size={24} />,
      title: "Critical Thinking",
      description: "Ability to analyze situations objectively and make reasoned judgments"
    },
    {
      icon: <MessageSquare className="text-blue-600" size={24} />,
      title: "Communication Skills",
      description: "Clear technical communication and effective presentation abilities"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Team Collaboration",
      description: "Experience working effectively in collaborative environments"
    },
    {
      icon: <Clock className="text-red-600" size={24} />,
      title: "Time Management",
      description: "Efficient project planning and deadline management skills"
    },
    {
      icon: <Target className="text-indigo-600" size={24} />,
      title: "Adaptability",
      description: "Quick to learn new technologies and adapt to changing requirements"
    },
    {
      icon: <Lightbulb className="text-orange-600" size={24} />,
      title: "Continuous Learning",
      description: "Passionate about staying updated with latest technologies and trends"
    },
    {
      icon: <MessageSquare className="text-teal-600" size={24} />,
      title: "Project Presentation",
      description: "Skilled at presenting technical projects and explaining complex concepts"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technical expertise and soft skills that drive my development approach
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h4 className="text-lg font-bold text-gray-900">{category.title}</h4>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">💡 Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-sm">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{skill.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;