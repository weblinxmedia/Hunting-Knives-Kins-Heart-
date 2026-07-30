"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

import type { NavigationCategory } from "@/types/navigation";

interface MobileCategoryAccordionProps {
    category: NavigationCategory;
    isExpanded: boolean;
    onToggle: () => void;
    onNavigate: () => void;
}

export function MobileCategoryAccordion({
    category,
    isExpanded,
    onToggle,
    onNavigate,
}: MobileCategoryAccordionProps) {
    return (
        <div className="border-b border-black/10">
            <div className="flex min-h-14 items-center">
                <Link
                    href={category.href}
                    onClick={onNavigate}
                    className="flex-1 py-4 font-jakarta text-base font-semibold transition-colors hover:text-primary"
                >
                    {category.name}
                </Link>

                <button
                    type="button"
                    aria-label={`${isExpanded ? "Close" : "Open"} ${category.name} menu`}
                    aria-expanded={isExpanded}
                    onClick={onToggle}
                    className="flex size-12 items-center justify-center transition-colors hover:text-primary"
                >
                    {isExpanded ? (
                        <Minus size={18} />
                    ) : (
                        <Plus size={18} />
                    )}
                </button>
            </div>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 pl-4">
                            {category.subcategories.map(
                                (subcategory) => (
                                    <section
                                        key={subcategory.id}
                                        className="mb-5 last:mb-0"
                                    >
                                        <Link
                                            href={subcategory.href}
                                            onClick={onNavigate}
                                            className="font-montserrat text-xs font-semibold uppercase tracking-wider text-primary"
                                        >
                                            {subcategory.name}
                                        </Link>

                                        <ul className="mt-3 space-y-2.5 border-l border-black/10 pl-4">
                                            {subcategory.products
                                                .slice(0, 4)
                                                .map((product) => (
                                                    <li key={product.id}>
                                                        <Link
                                                            href={product.href}
                                                            onClick={onNavigate}
                                                            className="font-montserrat text-sm text-black/60 transition-colors hover:text-primary"
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </section>
                                ),
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}