import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  const handleViewResume = () => {
    // In a real application, this would open a PDF viewer
    window.open('/my resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    // In a real application, this would trigger a download
    const link = document.createElement('a');
    link.href = '/my resume.pdf';
    link.download = 'Nithish Kumars.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-6 shadow-md">
              <FileText className="text-blue-600 w-12 h-12 mx-auto" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nithish Kumar's - Resume
            </h3>
            
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the complete overview of my education, experience, projects, and skills. 
              My resume provides detailed information about my technical background and achievements.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={handleViewResume}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Eye size={20} />
                <span className="font-semibold">View Resume</span>
              </button>
              
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <Download size={20} />
                <span className="font-semibold">Download PDF</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">2025</div>
                  <div className="text-gray-600">Pursuing B.Tech</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-1">4+</div>
                  <div className="text-gray-600">Major Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">6+</div>
                  <div className="text-gray-600">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Resume Highlights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Technical Skills</h5>
              <p className="text-gray-600 text-sm">
                AIML Student with Generative AI, ML/DL ,NLP , Python, and modern Technologies
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Education</h5>
              <p className="text-gray-600 text-sm">
                Present B.Tech - CSE(AI & ML) with 9.1 CGPA and multiple academic honors
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Projects</h5>
              <p className="text-gray-600 text-sm">
                4 major projects On Real-time Applications
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Certifications</h5>
              <p className="text-gray-600 text-sm">
                Industry-recognized certifications from IBM, AWS, Microsoft and other leading platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;