import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python(Basic)",
      issuer: "HackerRank",
      date: "January 2025",
      description: "Learned the fundamentals of Python programming, including variables, data types, loops, functions, and basic file handling. Developed problem-solving skills using Python for automation and simple applications.",
      credentialUrl: "https://www.hackerrank.com/certificates/5525acf67531",
      skills: ["Python", "Data Types", "Functions", "Error Handling"]
    },
    {
      title: "Python Data Structures",
      issuer: "University of  Michigan-Coursera",
      date: "December 2023",
      description: "Explored essential Python data structures such as lists, dictionaries, tuples, and strings. Learned how to manipulate, store, and retrieve structured data efficiently using Python.",
      credentialUrl: "https://freecodecamp.org/certification",
      skills: ["Python Lists", "Tuples", "Data Structures", "Loops"]
    },
    {
      title: "Fundamentals of AI concepts",
      issuer: "Microsoft",
      date: "April 2024",
      description: "Gained foundational understanding of Artificial Intelligence concepts, including machine learning, computer vision, and natural language processing. Explored real-world applications of AI and ethical considerations in AI development.",
      credentialUrl: "https://theodinproject.com/certificate",
      skills: ["AI", "ML", "Computer Vision", "Real-time applications"]
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "March 2025",
      description: "Gained a solid foundation in cloud computing concepts and AWS core services, architecture, and global infrastructure. Explored AWS security, pricing models, and the shared responsibility model.",
      credentialUrl: " https://www.credly.com/go/gtSbW26I",
      skills: ["AWS", "Cloud Computing", "EC2", "Cloud Security", "IAM"]
    },
    {
      title: "Scalable Machine Learning on Big Data using Apache Spark",
      issuer: "IBM",
      date: "March 2024",
      description: "Learned to build scalable machine learning models using Apache Spark and MLlib for big data applications.Gained hands-on experience with PySpark, RDDs, and distributed data processing techniques.",
      credentialUrl: "https://coursera.org/verify/python-cert",
      skills: ["Apache Spark", "ML Lib", "PySpark", "Big data", "Data Analysis"]
    },
    {
      title: "AWS Academy Cloud Operations",
      issuer: "Amazon Web Services",
      date: "March 2025",
      description: "Learned how to manage, monitor, and operate cloud infrastructure using AWS services.Explored cloud operations, deployment, automation, and troubleshooting in real-world scenarios.",
      credentialUrl: "https://www.credly.com/go/6iquJl6X",
      skills: ["AWS", "CloudWatch", "CloudTrail", "EC2", "IAM"]
    },
    {
      title: "Generative AI and ChatGPT",
      issuer: "GreeksForGreeks",
      date: "June 2025",
      description: "Learned Generative AI Techniques and how emerging these in real world . Analyzing various distributions and how they are contributing to build new models.",
      credentialUrl: "https://www.geeksforgeeks.org/certificate/f5026a6f1d8a84487a4e3abbb01f4003",
      skills: ["GEN AI", "ChatGPT", "Real-World Applications", "Distributions"]
    },
    {
      title: "NPTEL-Programming in Java",
      issuer: "NPTEL",
      date: "April 2024",
      description: "Learned fundamental to advanced Java programming concepts and how Java is emerging across modern software ecosystems.",
      credentialUrl: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs43",
      skills: ["Java", "Basics", "Functions", "Arrays"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-lg shadow-sm">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">{cert.issuer}</p>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                <ExternalLink size={16} />
                <span>View Credential</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
