import React from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';
import { ResumeData } from '../types';

const Achievements: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section id="achievements" className="py-24 bg-slate-50 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Certifications */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Shield className="text-blue-600" size={24} />
                        </div>
                        Certifications
                    </h2>
                    <div className="space-y-4">
                        {data.certifications.map((cert, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                                <div className="min-w-[24px] pt-1">
                                    <CheckCircle size={20} className="text-green-500" />
                                </div>
                                <p className="font-medium text-slate-700 leading-snug">{cert.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                         <div className="p-2 bg-amber-100 rounded-lg">
                            <Award className="text-amber-600" size={24} />
                        </div>
                        Positions of Responsibility
                    </h2>
                    <div className="space-y-4">
                        {data.achievements.map((ach, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-8 -mt-8"></div>
                                <h3 className="font-bold text-slate-800 text-lg relative z-10">{ach.title}</h3>
                                {ach.role && <p className="text-blue-600 font-medium text-sm mt-1">{ach.role}</p>}
                                <div className="mt-3 pt-3 border-t border-slate-50">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Given by: {ach.issuer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;