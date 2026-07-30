"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import navigationData from "@/data/navigation.json";
import productsData from "@/data/products.json";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import type { Product } from "@/types";
import type { NavigationCategory } from "@/types/navigation";

import { HeaderShell } from "./HeaderShell";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { SearchDrawer } from "./SearchDrawer";

const categories =
    navigationData as NavigationCategory[];

const products = productsData as Product[];

interface HeaderProps {

    stickyThreshold?: number;
}

export function Header({
    stickyThreshold = 80,
}: HeaderProps) {
    const [isSearchOpen, setIsSearchOpen] =
        useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] =
        useState(false);

    const isSticky =
        useScrollThreshold(stickyThreshold);

    const hasOpenDrawer =
        isSearchOpen || isMobileMenuOpen;

    useBodyScrollLock(hasOpenDrawer);

    const closeDrawers = useCallback(() => {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
    }, []);

    useEscapeKey(closeDrawers, hasOpenDrawer);

    const openSearch = () => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(true);
    };

    const openMobileMenu = () => {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(true);
    };

    return (
        <>
            {!isSticky && (
                <header
                    className={`
            absolute left-0 right-0 top-0 z-50
            bg-transparent text-white
          `}
                >
                    <HeaderShell
                        categories={categories}
                        tone="light"
                        onSearchOpen={openSearch}
                        onMobileMenuOpen={openMobileMenu}
                    />
                </header>
            )}

            <AnimatePresence initial={false}>
                {isSticky && (
                    <motion.header
                        key="sticky-header"
                        className={`
              fixed left-0 right-0 top-0 z-50
              bg-white text-black shadow-[0_8px_30px_rgb(0_0_0/0.08)]
            `}
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <HeaderShell
                            categories={categories}
                            tone="dark"
                            onSearchOpen={openSearch}
                            onMobileMenuOpen={openMobileMenu}
                        />
                    </motion.header>
                )}
            </AnimatePresence>

            <SearchDrawer
                isOpen={isSearchOpen}
                products={products}
                onClose={() => setIsSearchOpen(false)}
            />

            <MobileMenuDrawer
                isOpen={isMobileMenuOpen}
                categories={categories}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}