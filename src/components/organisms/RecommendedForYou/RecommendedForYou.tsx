"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import productsData from "@/data/products.json";
import { ProductCard } from "@/components/molecules/ProductCard";
import { QuickViewModal } from "@/components/organisms/QuickViewModal";
import { ScrollReveal } from "@/components/atoms/ScrollReveal";
import type { Product } from "@/types";

export function RecommendedForYou() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);


    const recommendedProducts = productsData.slice(0, 6) as Product[];

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
        <section className="py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-[1300px] px-4 sm:px-5 lg:px-8">

                {/* Header */}
                <ScrollReveal>
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="font-outfit text-xs md:text-[14px] font-semibold uppercase tracking-[0.08em] text-primary">
                                Just Landed
                            </p>
                            <h2 className="mt-1 font-montserrat text-3xl md:text-5xl tracking-tighter font-bold text-black">
                                Recommended For You
                            </h2>
                        </div>


                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="flex h-11 w-11 items-center justify-center rounded-full cursor-pointer border border-black/15 text-black transition-colors hover:border-primary hover:text-primary"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="flex h-11 w-11 items-center justify-center rounded-full cursor-pointer border border-black/15 text-black transition-colors hover:border-primary hover:text-primary"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Carousel Container */}
                <ScrollReveal delay={0.15}>
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {recommendedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-[280px] w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] xl:min-w-[calc(25%-15px)] snap-start"
                            >
                                <ProductCard product={product} onQuickView={setQuickViewProduct} />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

            </div>

            <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
        </section>
    );
}