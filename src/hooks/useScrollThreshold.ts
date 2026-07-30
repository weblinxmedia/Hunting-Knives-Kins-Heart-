"use client";

import { useEffect, useState } from "react";

export function useScrollThreshold(threshold = 5) {
    const [hasPassedThreshold, setHasPassedThreshold] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasPassedThreshold(window.scrollY > threshold);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return hasPassedThreshold;
}