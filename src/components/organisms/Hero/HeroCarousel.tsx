"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/atoms/Button';
import banners from '@/data/banners.json';
import Link from 'next/link';

export const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const smoothEase = [0.25, 0.1, 0.25, 1] as const;

    return (
        <div className="relative h-screen max-h-[85vh] flex items-center justify-end w-full bg-black overflow-hidden">



            {banners.map((banner, index) => (
                <motion.div
                    key={banner.id}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={index === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.07 }}
                    transition={{
                        opacity: { duration: 1.5, ease: "easeInOut" },
                        scale: { duration: 1, ease: "easeOut" }
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${banner.image})` }}
                    />
                    <div className="absolute inset-0 bg-[#000000C2]" />
                </motion.div>
            ))}

            <div className="relative h-fit w-[calc(100%-100px] self-center md:self-end pb-[1%] mx-auto  flex flex-col items-center justify-between text-center px-4 z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={banners[currentIndex].id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="flex w-[100vw] max-w-[1300px] flex-col md:flex-row justify-center md:justify-between px-4 sm:px-5 lg:px-8 items-center"
                        transition={{ duration: 0.8, ease: smoothEase }}
                    >
                        <div className="w-fit text-center md:text-start select-none self-center md:self-start py-0 mb-10 md:mb-0 md:py-[30px]">
                            <span className="text-sm text-primary font-outfit pl-1.5">— {banners[currentIndex].eyebrow}</span>
                            <h1 className="text-4xl md:text-6xl font-montserrat font-bold tracking-[-1px] text-white drop-shadow-lg">
                                {banners[currentIndex].title}
                            </h1>
                            <p className="text-[14px] font-outfit text-[#CFCFCF] mt-0.5 drop-shadow-md pl-1.5 max-w-xl " style={{ fontWeight: '300' }}>
                                {banners[currentIndex].subtitle}
                            </p>
                        </div>
                        <Link href={banners[currentIndex].link}>
                            <Button variant="outline">{banners[currentIndex].buttonText}</Button>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-[0.14em] rounded-full h-8 transition-all duration-300 ${idx === currentIndex ? 'bg-primary scale-y-125' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};