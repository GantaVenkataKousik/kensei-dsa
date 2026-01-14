
import React, { useState, useEffect, useRef } from 'react';
import { Timer as TimerIcon, Volume2, VolumeX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const Timer: React.FC = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [showMilestoneText, setShowMilestoneText] = useState(false);
    const [milestoneMinutes, setMilestoneMinutes] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Audio Playback logic
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(() => {
                    console.log("Audio playback waiting for user interaction");
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Initial interaction listener for audio
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (isPlaying && audioRef.current && audioRef.current.paused) {
                audioRef.current.play().catch(() => { });
            }
        };
        window.addEventListener('click', handleFirstInteraction);
        return () => window.removeEventListener('click', handleFirstInteraction);
    }, [isPlaying]);

    // Timer logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Celebration check
    useEffect(() => {
        if (timeElapsed > 0 && timeElapsed % 300 === 0) { // 300 seconds = 5 minutes
            const minutes = Math.floor(timeElapsed / 60);
            setMilestoneMinutes(minutes);
            setShowMilestoneText(true);

            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#B00906', '#FFD176', '#E5DCC2']
            });

            console.log(`Congratulations! You've been studying for ${minutes} minutes.`);
        }
    }, [timeElapsed]);

    // Auto-hide milestone text after 2 seconds
    useEffect(() => {
        if (showMilestoneText) {
            const timer = setTimeout(() => {
                setShowMilestoneText(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showMilestoneText]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <audio ref={audioRef} src="/music/interstellar-maintheme.mp3" loop />

            {/* Milestone Text Overlay */}
            <AnimatePresence>
                {showMilestoneText && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none"
                    >
                        <div className="text-center">
                            <h2 className="text-7xl md:text-9xl font-black text-[#FFD176] tracking-widest drop-shadow-2xl">
                                {milestoneMinutes} MIN
                            </h2>
                            <p className="text-2xl md:text-4xl font-serif text-[#B00906] mt-4 tracking-widest">
                                FOCUSED
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="fixed top-20 right-4 md:top-6 md:right-6 z-50 flex flex-col items-end space-y-2">
                <div className="flex flex-col items-center space-y-1 text-[#E5DCC2]/90 border border-[#E5DCC2]/30 px-3 py-2 md:px-4 md:py-3 rounded-lg bg-black/80 backdrop-blur-sm shadow-2xl">
                    <div className="flex items-center space-x-2">
                        <TimerIcon size={16} className="text-[#B00906] md:w-5 md:h-5" />
                        <span className="font-mono text-xl md:text-2xl tracking-widest font-bold">{formatTime(timeElapsed)}</span>
                    </div>
                    <div className="text-[8px] md:text-[10px] tracking-[0.3em] text-[#B5AD97] uppercase">Focused</div>
                </div>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-[10px] md:text-xs tracking-[0.2em] text-[#B5AD97] hover:text-[#FFD176] transition-all duration-300 flex items-center space-x-1 md:space-x-2 px-2 py-1 md:px-3 md:py-2 border border-[#E5DCC2]/20 rounded-lg bg-black/80 backdrop-blur-sm"
                >
                    {isPlaying ? (
                        <>
                            <Volume2 size={12} className="md:w-3.5 md:h-3.5" />
                            <span>MUTE</span>
                        </>
                    ) : (
                        <>
                            <VolumeX size={12} className="md:w-3.5 md:h-3.5" />
                            <span>PLAY</span>
                        </>
                    )}
                </button>
            </div>
        </>
    );
};

export default Timer;
