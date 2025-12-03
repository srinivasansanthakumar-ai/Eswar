import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, MessageSquare } from 'lucide-react';
import { ResumeData } from '../types';

const getIconForProject = (title: string) => {
    if (title.toLowerCase().includes('rfid') || title.toLowerCase().includes('blind')) return Cpu;
    if (title.toLowerCase().includes('iot') || title.toLowerCase().includes('water')) return Wifi;
    return MessageSquare;
}

const Projects: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section className="py-20 bg-slate-900 text-white px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-slate-400">Innovation applied to real-world problems.</p>
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
                                className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                                    <Icon className="text-blue-400 group-hover:text-white transition-colors" size={24} />
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                
                                <div className="mt-auto">
                                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.split(',').map((tech, tIdx) => (
                                            <span key={tIdx} className="text-xs px-2 py-1 bg-slate-900 rounded text-blue-300 border border-slate-700">
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