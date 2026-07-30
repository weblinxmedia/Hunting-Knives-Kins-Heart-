"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    LogIn,
    Mail,
    Phone,
    X,
} from "lucide-react";

import { IconButton } from "@/components/atoms/IconButton";
import { siteContact } from "@/lib/site";
import type { NavigationCategory } from "@/types/navigation";

import { DrawerBackdrop } from "./DrawerBackdrop";
import { MobileCategoryAccordion } from "./MobileCategoryAccordion";
import { SiteLogo } from "./SiteLogo";

interface MobileMenuDrawerProps {
    isOpen: boolean;
    categories: NavigationCategory[];
    onClose: () => void;
}

export function MobileMenuDrawer({
    isOpen,
    categories,
    onClose,
}: MobileMenuDrawerProps) {
    const [expandedCategoryId, setExpandedCategoryId] =
        useState<string | null>(null);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <DrawerBackdrop
                        label="Close mobile navigation"
                        onClose={onClose}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className={`
              fixed bottom-0 left-0 top-0 z-[100]
              flex w-[92%] max-w-[440px] flex-col
              bg-white text-black shadow-2xl
            `}
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <header className="flex h-20 items-center justify-between border-b border-black/10 px-5">
                            <SiteLogo
                                tone="dark"
                                onClick={onClose}
                            />

                            <IconButton
                                label="Close mobile navigation"
                                onClick={onClose}
                                className="-mr-2 hover:text-primary"
                            >
                                <X size={22} />
                            </IconButton>
                        </header>

                        <div className="flex-1 overflow-y-auto">
                            <nav
                                aria-label="Mobile primary navigation"
                                className="px-5 py-4"
                            >
                                <Link
                                    href="/"
                                    onClick={onClose}
                                    className="flex min-h-14 items-center border-b border-black/10 font-jakarta text-base font-semibold transition-colors hover:text-primary"
                                >
                                    Home
                                </Link>

                                {categories.map((category) => (
                                    <MobileCategoryAccordion
                                        key={category.id}
                                        category={category}
                                        isExpanded={
                                            expandedCategoryId === category.id
                                        }
                                        onToggle={() => {
                                            setExpandedCategoryId((current) =>
                                                current === category.id
                                                    ? null
                                                    : category.id,
                                            );
                                        }}
                                        onNavigate={onClose}
                                    />
                                ))}

                                <Link
                                    href="/categories"
                                    onClick={onClose}
                                    className="flex min-h-14 items-center border-b border-black/10 font-jakarta text-base font-semibold transition-colors hover:text-primary"
                                >
                                    View All Categories
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={onClose}
                                    className="flex min-h-14 items-center border-b border-black/10 font-jakarta text-base font-semibold transition-colors hover:text-primary"
                                >
                                    About Us
                                </Link>
                            </nav>

                            <section className="border-t border-black/10 px-5 py-6">
                                <p className="mb-4 font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
                                    Contact us
                                </p>

                                <a
                                    href={`tel:${siteContact.phoneHref}`}
                                    className="mb-3 flex items-center gap-3 font-montserrat text-sm transition-colors hover:text-primary"
                                >
                                    <Phone size={17} strokeWidth={1.7} />
                                    {siteContact.phoneDisplay}
                                </a>

                                <a
                                    href={`mailto:${siteContact.email}`}
                                    className="flex items-center gap-3 font-montserrat text-sm transition-colors hover:text-primary"
                                >
                                    <Mail size={17} strokeWidth={1.7} />
                                    {siteContact.email}
                                </a>
                            </section>

                            <section className="border-t border-black/10 px-5 py-6">
                                <Link
                                    href="/login"
                                    onClick={onClose}
                                    className="flex items-center gap-3 font-montserrat text-sm font-semibold transition-colors hover:text-primary"
                                >
                                    <LogIn size={18} strokeWidth={1.7} />
                                    Login or Register
                                </Link>
                            </section>
                        </div>

                        <footer className="grid grid-cols-2 border-t border-black/10">
                            <button
                                type="button"
                                className="flex h-14 items-center justify-center gap-2 border-r border-black/10 font-montserrat text-xs font-semibold transition-colors hover:text-primary"
                            >
                                <span aria-hidden="true">🇺🇸</span>
                                USD
                            </button>

                            <button
                                type="button"
                                className="flex h-14 items-center justify-center font-montserrat text-xs font-semibold transition-colors hover:text-primary"
                            >
                                English
                            </button>
                        </footer>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}