import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool, Users, Globe } from 'lucide-react';
import { ResumeData } from '../types';

const SkillCard = ({ title, skills, icon: Icon, delay }: { title: string, skills: string[], icon: any, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <Icon size={24} />
            </div>
            <h3 className="font-bold text-lg text-slate-800">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section id="skills" className="py-24 bg-slate-50 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">A comprehensive overview of my technical abilities, tools I use, and soft skills I bring to the table.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard 
                        title="Programming" 
                        skills={data.skills.languages} 
                        icon={Code} 
                        delay={0.1} 
                    />
                    <SkillCard 
                        title="Tools & Tech" 
                        skills={data.skills.tools} 
                        icon={PenTool} 
                        delay={0.2} 
                    />
                    <SkillCard 
                        title="Soft Skills" 
                        skills={data.skills.softSkills} 
                        icon={Users} 
                        delay={0.3} 
                    />
                    <SkillCard 
                        title="Languages" 
                        skills={data.skills.spokenLanguages} 
                        icon={Globe} 
                        delay={0.4} 
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;