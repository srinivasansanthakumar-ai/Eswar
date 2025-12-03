import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { ResumeData } from '../types';

interface HeroProps {
  data: ResumeData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="hero" className="relative w-full bg-slate-900 text-white overflow-hidden pt-28 pb-20 px-6 lg:px-20 min-h-screen flex items-center justify-center">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[128px] translate-y-1/2 -translate-x-1/3 mix-blend-screen"></div>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center lg:text-left order-2 lg:order-1"
            >
                <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-2 backdrop-blur-sm">
                    Electrical & Electronics Engineer
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                    Hi, I'm <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        {data.name}
                    </span>
                </h1>
                <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg">
                    {data.summary}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-blue-600/25">
                        <Mail size={18} /> Contact Me
                    </a>
                    <button className="flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-full text-white font-medium transition-all backdrop-blur-sm">
                        <Download size={18} /> Download CV
                    </button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 pt-6 text-slate-400 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-blue-500"/> {data.contact.phone}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-500"/> {data.contact.location}
                    </div>
                    <div className="flex items-center gap-4 border-l border-slate-700 pl-8">
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
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* Animated rings */}
                    <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite] [animation-duration:20s]"></div>
                    <div className="absolute inset-4 border border-indigo-500/20 rounded-full animate-[spin_10s_linear_infinite] [animation-direction:reverse] [animation-duration:15s]"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl"></div>
                    
                    <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl relative z-10 group">
                         <img 
                            src="https://picsum.photos/800/800" 
                            alt={data.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        >
            <ChevronDown size={24} />
        </motion.div>
    </section>
  );
};

export default Hero;