
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ExternalLink } from 'lucide-react';

const DPPatterns: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [dpData, setDpData] = useState<any>(null);

    useEffect(() => {
        // Fetch and decode the obfuscated JSON
        fetch('/helpers/dp.json')
            .then(res => res.text())
            .then(encoded => {
                // Decode by reducing character code by 2
                const decoded = encoded.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 2)).join('');
                setDpData(JSON.parse(decoded));
            })
            .catch(err => console.error('Failed to load DP data:', err));
    }, []);

    if (!dpData) {
        return <div className="py-24 text-center text-[#E5DCC2]">Loading patterns...</div>;
    }

    return (
        <section id="patterns" className="py-24 bg-[#0F0F0F] relative border-b border-[#E5DCC2]/5">
            {/* Background elements similar to other sections */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[#E5DCC2]/10 font-serif text-6xl md:text-[120px] font-bold absolute top-0 left-1/2 -translate-x-1/2 select-none z-0 whitespace-nowrap">MASTERY</h2>
                    <h3 className="text-[#FFD176] font-accent text-4xl md:text-6xl mb-4 relative z-10">DP Patterns</h3>
                    <p className="text-[#B5AD97] font-sans tracking-[0.2em] uppercase text-xs">Master Dynamic Programming</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {dpData.categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="border border-[#E5DCC2]/10 bg-black/40 backdrop-blur-sm rounded-sm overflow-hidden hover:border-[#FFD176]/30 transition-colors"
                        >
                            <button
                                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-1 h-8 ${openIndex === index ? 'bg-[#FFD176]' : 'bg-[#B00906]'} transition-colors`}></div>
                                    <span className={`font-serif text-lg md:text-xl transition-colors ${openIndex === index ? 'text-[#FFD176]' : 'text-[#E5DCC2] group-hover:text-white'}`}>
                                        {category.name}
                                    </span>
                                </div>
                                <span className={`text-[#FFD176] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 pt-2 pl-11">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {category.problems.map((problem, pIndex) => (
                                                    <a
                                                        key={pIndex}
                                                        href={problem.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 group/link p-2 rounded hover:bg-[#E5DCC2]/5 transition-colors"
                                                    >
                                                        <ExternalLink size={14} className="text-blue-400 shrink-0" />
                                                        <span className="text-blue-400 text-lg font-bold font-sans truncate group-hover/link:underline decoration-blue-400 underline-offset-4">
                                                            {problem.title}
                                                        </span>
                                                    </a>
                                                ))}
                                                {category.problems.length === 0 && (
                                                    <span className="text-[#7A7365] text-sm italic">No problems listed yet.</span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-8 border border-[#FFD176]/20 bg-[#FFD176]/5 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD176] to-transparent opacity-50"></div>
                        <h4 className="text-[#FFD176] text-2xl font-serif mb-3">New Patterns Coming Soon!!</h4>
                        <p className="text-[#B5AD97] mb-6 max-w-lg mx-auto">
                            We are constantly expanding our library. Star the repo or use the form below to show your interest in new patterns.
                        </p>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#B00906] text-white font-bold tracking-widest hover:bg-[#FFD176] hover:text-black transition-all duration-300"
                        >
                            <span>STAR REPO & CONTACT</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DPPatterns;
