import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { ResumeData } from '../types';

const Achievements: React.FC<{ data: ResumeData }> = ({ data }) => {
    return (
        <section className="py-20 bg-slate-50 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Certifications */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Award className="text-blue-600" />
                        Certifications
                    </h2>
                    <div className="space-y-4">
                        {data.certifications.map((cert, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex items-start gap-4">
                                <div className="min-w-[24px] pt-1">
                                    <CheckCircle size={20} className="text-green-500" />
                                </div>
                                <p className="font-medium text-slate-700">{cert.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <Award className="text-amber-500" />
                        Positions of Responsibility
                    </h2>
                    <div className="space-y-4">
                        {data.achievements.map((ach, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-800 text-lg">{ach.title}</h3>
                                {ach.role && <p className="text-blue-600 font-medium text-sm mt-1">{ach.role}</p>}
                                <p className="text-slate-500 text-sm mt-1 italic">Given by: {ach.issuer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;