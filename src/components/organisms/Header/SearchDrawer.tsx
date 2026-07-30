"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

import { IconButton } from "@/components/atoms/IconButton";
import { useProductSearch } from "@/hooks/useProductSearch";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

import { DrawerBackdrop } from "./DrawerBackdrop";
import { SearchResultItem } from "./SearchResultItem";

interface SearchDrawerProps {
    isOpen: boolean;
    products: Product[];
    onClose: () => void;
}

export function SearchDrawer({
    isOpen,
    products,
    onClose,
}: SearchDrawerProps) {
    const [query, setQuery] = useState("");

    const results = useProductSearch(
        products,
        query,
        5,
    );

    const normalizedQuery = query.trim();

    const searchHref = normalizedQuery
        ? `/search?q=${encodeURIComponent(normalizedQuery)}`
        : "/search";

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <DrawerBackdrop
                        label="Close product search"
                        onClose={onClose}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="search-drawer-heading"
                        className={`
              fixed bottom-0 right-0 top-0 z-[100]
              flex w-full max-w-[520px] flex-col
              bg-white text-black shadow-2xl
            `}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <header className="flex items-start justify-between border-b border-black/10 px-6 py-6 sm:px-8">
                            <div>
                                <p className="mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                    Product search
                                </p>

                                <h2
                                    id="search-drawer-heading"
                                    className="font-jakarta text-2xl font-semibold"
                                >
                                    What are you looking for?
                                </h2>
                            </div>

                            <IconButton
                                label="Close product search"
                                onClick={onClose}
                                className="-mr-2 hover:text-primary"
                            >
                                <X size={22} />
                            </IconButton>
                        </header>

                        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
                            <form
                                action="/search"
                                method="get"
                                className="relative"
                            >
                                <input
                                    autoFocus
                                    type="search"
                                    name="q"
                                    value={query}
                                    onChange={(event) => {
                                        setQuery(event.target.value);
                                    }}
                                    placeholder="Search products"
                                    autoComplete="off"
                                    className={`
                    h-14 w-full border border-black/15
                    bg-white pl-4 pr-14 font-montserrat
                    text-sm outline-none transition-colors
                    placeholder:text-black/35
                    focus:border-primary
                  `}
                                />

                                <button
                                    type="submit"
                                    aria-label="Submit product search"
                                    className={`
                    absolute right-0 top-0 flex size-14
                    items-center justify-center
                    transition-colors hover:text-primary
                  `}
                                >
                                    <Search size={20} />
                                </button>
                            </form>

                            <div className="mt-7">
                                {!normalizedQuery && (
                                    <p className="font-montserrat text-sm leading-6 text-black/50">
                                        Start typing a product name, category, or blade material.
                                    </p>
                                )}

                                {normalizedQuery && results.length === 0 && (
                                    <div className="border border-dashed border-black/20 px-5 py-8 text-center">
                                        <p className="font-jakarta font-semibold">
                                            No matching products
                                        </p>

                                        <p className="mt-2 font-montserrat text-sm text-black/50">
                                            Try a different product name or category.
                                        </p>
                                    </div>
                                )}

                                {results.length > 0 && (
                                    <>
                                        <p className="mb-2 font-montserrat text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                                            Suggested products
                                        </p>

                                        <div>
                                            {results.map((product) => (
                                                <SearchResultItem
                                                    key={product.id}
                                                    product={product}
                                                    onNavigate={onClose}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <footer className="border-t border-black/10 p-6 sm:px-8">
                            <Link
                                href={searchHref}
                                onClick={(event) => {
                                    if (!normalizedQuery) {
                                        event.preventDefault();
                                        return;
                                    }

                                    onClose();
                                }}
                                aria-disabled={!normalizedQuery}
                                className={cn(
                                    "flex h-13 w-full items-center justify-center",
                                    "bg-primary px-6 font-montserrat text-xs",
                                    "font-semibold uppercase tracking-[0.14em]",
                                    "text-white transition-colors hover:bg-black",
                                    !normalizedQuery &&
                                    "cursor-not-allowed opacity-50 hover:bg-primary",
                                )}
                            >
                                {normalizedQuery
                                    ? `Search for “${normalizedQuery}”`
                                    : "Enter a search term"}
                            </Link>
                        </footer>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    );
}