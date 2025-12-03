import React from 'react';
import { RESUME_DATA } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h2 className="text-white text-xl font-bold">{RESUME_DATA.name}</h2>
                <p className="text-sm mt-1 opacity-70">Electrical & Electronics Engineer</p>
            </div>
            
            <div className="flex gap-6">
                 {/* Links are placeholders as per resume data, effectively disabled but visual */}
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-white transition-colors"><Mail size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            </div>

            <div className="text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 scroll-smooth">
        <Header />
        <Hero data={RESUME_DATA} />
        <Skills data={RESUME_DATA} />
        <Timeline data={RESUME_DATA} />
        <Projects data={RESUME_DATA} />
        <Achievements data={RESUME_DATA} />
        <Footer />
    </div>
  );
}

export default App;