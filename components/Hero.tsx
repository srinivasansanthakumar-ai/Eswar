import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden py-20 px-6 lg:px-20 min-h-[85vh] flex items-center justify-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            >
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-2">
                    Portfolio
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white">
                    Hi, I'm <span className="text-blue-500">{data.name}</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-slate-300 font-light">
                    {data.role}
                </h2>
                <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    {data.summary}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors">
                        <Mail size={18} /> Contact Me
                    </a>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-white transition-colors">
                        <Download size={18} /> Download CV
                    </button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-blue-500"/> {data.contact.phone}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-500"/> {data.contact.location}
                    </div>
                    <div className="flex items-center gap-4">
                        {data.contact.linkedin && <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>}
                        {data.contact.github && <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>}
                    </div>
                </div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center order-1 lg:order-2"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite] [animation-duration:20s]"></div>
                    <div className="absolute inset-4 border-2 border-slate-600/30 rounded-full animate-[spin_10s_linear_infinite] [animation-direction:reverse] [animation-duration:15s]"></div>
                    <img 
                        src="https://picsum.photos/500/500" 
                        alt={data.name} 
                        className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-cover rounded-full shadow-2xl border-4 border-slate-800"
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;