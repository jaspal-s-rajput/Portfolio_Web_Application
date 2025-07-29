import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
// import Collaborations from './components/Collaborations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Tools />
          <Projects />
          <Experience />
          <Achievements />
          <Hobbies />
          {/* <Collaborations /> */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;