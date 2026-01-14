import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
                <div className="text-center mb-20 relative">
                    <h2 className="text-[#E5DCC2]/10 font-serif text-6xl md:text-[140px] font-bold absolute top-0 left-1/2 -translate-x-1/2 select-none z-0 whitespace-nowrap">CONNECT</h2>
                    <h3 className="text-[#FFD176] font-accent text-4xl md:text-6xl mb-4 relative z-10">Get in Touch</h3>
                    <p className="text-[#B5AD97] font-sans tracking-[0.3em] uppercase text-xs">Share • Learn • Grow</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-white font-serif text-3xl font-bold mb-6">
                                Join the <span className="text-[#FFD176]">Journey</span>
                            </h4>
                            <p className="text-[#B5AD97] font-sans leading-relaxed text-lg mb-8">
                                Have questions? Want to contribute patterns? Or just want to share your DSA journey?
                                We'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="relative group">
                                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#B00906] group-hover:w-1 transition-all"></div>
                                <h5 className="text-[#FFD176] font-serif text-xl mb-2">Quick Response</h5>
                                <p className="text-[#7A7365] font-sans text-sm">We typically respond within 24-48 hours</p>
                            </div>

                            <div className="relative group">
                                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#B00906] group-hover:w-1 transition-all"></div>
                                <h5 className="text-[#FFD176] font-serif text-xl mb-2">Open to Collaboration</h5>
                                <p className="text-[#7A7365] font-sans text-sm">Suggest new patterns or improvements to existing ones</p>
                            </div>

                            <div className="relative group">
                                <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-[#B00906] group-hover:w-1 transition-all"></div>
                                <h5 className="text-[#FFD176] font-serif text-xl mb-2">Community Driven</h5>
                                <p className="text-[#7A7365] font-sans text-sm">Built by learners, for learners</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="bg-black border border-[#E5DCC2]/10 rounded-lg p-8 space-y-6"
                        >
                            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                            <input type="hidden" name="subject" value="New Contact from Kensei DSA Platform" />
                            <input type="hidden" name="from_name" value="Kensei DSA Contact Form" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} />

                            <div>
                                <label className="block text-[#E5DCC2] text-sm font-medium mb-2">Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full bg-[#0A0A0A] border border-[#E5DCC2]/20 rounded px-4 py-3 text-[#E5DCC2] placeholder-[#7A7365] focus:outline-none focus:border-[#FFD176] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[#E5DCC2] text-sm font-medium mb-2">Email</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="your.email@example.com"
                                    className="w-full bg-[#0A0A0A] border border-[#E5DCC2]/20 rounded px-4 py-3 text-[#E5DCC2] placeholder-[#7A7365] focus:outline-none focus:border-[#FFD176] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[#E5DCC2] text-sm font-medium mb-2">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    placeholder="Share your thoughts, questions, or suggestions..."
                                    rows={5}
                                    className="w-full bg-[#0A0A0A] border border-[#E5DCC2]/20 rounded px-4 py-3 text-[#E5DCC2] placeholder-[#7A7365] focus:outline-none focus:border-[#FFD176] resize-none transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#B00906] text-white font-bold tracking-widest rounded hover:bg-[#FFD176] hover:text-black transition-all duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
