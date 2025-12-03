import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, MessageSquare, ExternalLink } from 'lucide-react';
import { ResumeData } from '../types';

const getIconForProject = (title: string) => {
    if (title.toLowerCase().includes('rfid') || title.toLowerCase().includes('blind')) return Cpu;
    if (title.toLowerCase().includes('iot') || title.toLowerCase().includes('water')) return Wifi;
    return MessageSquare;
}

const Projects: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section id="projects" className="py-24 bg-slate-900 text-white px-6 lg:px-20 relative overflow-hidden">
            {/* Background noise */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-slate-400 text-lg">Innovation applied to real-world problems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.projects.map((project, idx) => {
                        const Icon = getIconForProject(project.title);
                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 group flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <Icon className="text-blue-400 group-hover:text-white transition-colors" size={24} />
                                    </div>
                                    <ExternalLink size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors cursor-pointer" />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                
                                <div className="mt-4 pt-4 border-t border-slate-700/50">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.split(',').map((tech, tIdx) => (
                                            <span key={tIdx} className="text-xs px-2.5 py-1 bg-slate-900/80 rounded-md text-blue-200 border border-slate-700/50">
                                                {tech.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;