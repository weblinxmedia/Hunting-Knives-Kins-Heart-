"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const messages = [
    "Shopped by Customer",
    "New Arrivals",
    "Coming Soon"
];

export const SubHeader = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-primary text-black text-center h-8 flex items-center justify-center z-50 relative">
            <AnimatePresence mode="wait">
                <motion.p
                    key={messages[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-montserrat font-[500] ml-[-9px] uppercase tracking-wider"
                >
                    {messages[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};