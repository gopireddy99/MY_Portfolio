import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Home />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;