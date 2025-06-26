import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in CSE-AIML",
      institution: "Malla Reddy University",
      location: "Hyderabad, Telangana",
      period: "2022 - 2026",
      cgpa: "9.10/10.0"
    },
    {
      degree: "Intermediate",
      institution: "Abhyas Junior College",
      location: "Proddatur, Kadapa",
      period: "2020 - 2022",
      cgpa: "8.30/10.0"
    },
    {
      degree: "SSC (Secondary School Certificate)",
      institution: "St. Josephs Convent School",
      location: "Proddatur, Kadapa",
      period: "2019 - 2020",
      cgpa: "8.30/10.0"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and achievements that shaped my technical foundation
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-8">
                  <div className="bg-green-100 px-4 py-2 rounded-lg">
                    <p className="text-green-800 font-semibold">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;