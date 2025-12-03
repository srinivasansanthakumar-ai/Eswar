import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { ResumeData } from '../types';

const TimelineItem = ({ 
    type, 
    title, 
    subtitle, 
    date, 
    extra, 
    index 
}: { 
    type: 'edu' | 'work', 
    title: string, 
    subtitle: string, 
    date: string, 
    extra?: string,
    index: number 
}) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex items-center justify-between w-full mb-8 ${isEven ? 'flex-row-reverse' : ''}`}
        >
            <div className="order-1 w-5/12"></div>
            
            <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl shadow-blue-600/30 w-12 h-12 rounded-full justify-center border-4 border-white">
                {type === 'edu' ? <GraduationCap className="text-white w-5 h-5" /> : <Briefcase className="text-white w-5 h-5" />}
            </div>
            
            <div className={`order-1 w-5/12 px-6 py-4 rounded-xl shadow-md border border-slate-100 bg-white hover:shadow-lg transition-shadow ${isEven ? 'text-right' : 'text-left'}`}>
                <p className="mb-1 text-xs font-bold text-blue-600 tracking-wide uppercase">{date}</p>
                <h3 className="mb-1 font-bold text-slate-800 text-lg leading-tight">{title}</h3>
                <h4 className="mb-2 text-sm text-slate-500 font-medium">{subtitle}</h4>
                {extra && <p className="text-xs text-slate-600 bg-slate-100 inline-block px-2 py-1 rounded font-medium">{extra}</p>}
            </div>
        </motion.div>
    );
};

const Timeline: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section id="timeline" className="py-24 bg-white px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Journey So Far</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-slate-500 text-lg">My academic background and professional internships.</p>
                </div>

                <div className="relative wrap overflow-hidden p-4 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-blue-600 h-full border left-1/2 ml-[0px] lg:block hidden"></div>
                    
                    {/* Mobile View: Simple Stack */}
                    <div className="lg:hidden space-y-6">
                        {data.internships.map((job, idx) => (
                            <div key={`mob-job-${idx}`} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                                <div className="flex items-center gap-2 mb-2">
                                    <Briefcase size={16} className="text-blue-600" />
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{job.duration}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mt-1">{job.role}</h3>
                                <p className="text-slate-600">{job.company}, {job.location}</p>
                            </div>
                        ))}
                         {data.education.map((edu, idx) => (
                            <div key={`mob-edu-${idx}`} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
                                 <div className="flex items-center gap-2 mb-2">
                                    <GraduationCap size={16} className="text-indigo-500" />
                                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{edu.duration}</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mt-1">{edu.degree}</h3>
                                <p className="text-slate-600">{edu.institution}</p>
                                <p className="text-sm text-slate-500 mt-2 font-medium">{edu.score}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View: Timeline */}
                    <div className="hidden lg:block">
                        {data.internships.map((job, idx) => (
                            <TimelineItem 
                                key={`job-${idx}`}
                                index={idx}
                                type="work"
                                title={job.role}
                                subtitle={`${job.company} | ${job.location}`}
                                date={job.duration}
                            />
                        ))}
                        {data.education.map((edu, idx) => (
                            <TimelineItem 
                                key={`edu-${idx}`}
                                index={data.internships.length + idx}
                                type="edu"
                                title={edu.degree}
                                subtitle={edu.institution}
                                date={edu.duration}
                                extra={edu.score}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;