"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import productsData from "@/data/products.json";
import { ProductCard } from "@/components/molecules/ProductCard";
import { PromoBannerCard } from "@/components/molecules/PromoBannerCard";
import { QuickViewModal } from "@/components/organisms/QuickViewModal";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";
import type { Product } from "@/types";

export function NewArrivals() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    const newArrivals = productsData.filter((p) => p.isNewArrival) as Product[];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.75;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="mb-4 flex items-end justify-between">

                        <div>
                            <p className="font-outfit text-xs md:text-[14px] font-semibold uppercase tracking-[0.08em] text-primary">
                                Just Landed
                            </p>
                            <h2 className="mt-1 font-montserrat text-3xl md:text-5xl font-bold text-black">
                                New Arrivals
                            </h2>
                        </div>

                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors hover:border-primary hover:text-primary"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="flex h-11 w-11 items-center justify-center border border-black/15 text-black transition-colors hover:border-primary hover:text-primary"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
                {/* Split Layout Grid: Banner on Left, Carousel on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-6 lg:gap-8">

                    {/* Left Column: Promo Banner */}
                    <ScrollReveal direction="left">
                        <PromoBannerCard />
                    </ScrollReveal>

                    {/* Right Column: Carousel */}
                    <div className="flex flex-col">

                        {/* Header & Controls */}


                        {/* Carousel Container */}
                        <ScrollReveal direction="right" delay={0.1} className="grid">
                            <div
                                ref={scrollRef}
                                className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4 h-full items-stretch"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {newArrivals.map((product) => (
                                    <div
                                        key={product.id}
                                        className="min-w-[280px] w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(50%-10px)] snap-start"
                                    >
                                        <ProductCard product={product} onQuickView={setQuickViewProduct} />
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </div>

            <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        </section>
    );
}