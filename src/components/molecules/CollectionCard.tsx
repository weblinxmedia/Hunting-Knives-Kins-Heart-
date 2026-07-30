"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ScrollReveal } from "@/components/atoms/ScrollReveal";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface CollectionCardProps {
    title: string;
    categorySlug: string;
    categoryName: string;
    featuredProduct: Product;
    totalProductsInCategory: number;
    image: string;
    textImage: any;
    layout: "30-70" | "70-30" | "100";
}

export function CollectionCard({
    title,
    categorySlug,
    featuredProduct,
    totalProductsInCategory,
    image,
    textImage,
    layout,
}: CollectionCardProps) {

    // Shared UI elements so we don't repeat code
    const ProductInfo = () => (
        <div className="mt-6 space-y-4">
            <div className="flex items-baseline gap-3">
                <span className="font-jakarta text-xl font-semibold text-white/80">
                    {featuredProduct.name}
                </span>
                <span className="font-jakarta text-lg font-bold text-primary">
                    {formatCurrency(featuredProduct.price)}
                </span>
            </div>

            <Link
                href={categorySlug}
                className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-primary group"
            >
                <span className="border-b border-white group-hover:border-primary pb-0.5">
                    {totalProductsInCategory} options available
                </span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    );

    const CTAButton = () => (
        <div className="mt-10">
            <Link
                href={categorySlug}
                className="inline-flex items-center justify-center bg-black px-8 py-4 font-montserrat text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary"
            >
                Shop Now
            </Link>
        </div>
    );

    // ==========================================
    // 100% FULL WIDTH LAYOUT
    // ==========================================
    if (layout === "100") {
        return (
            <ScrollReveal direction="up">
                <div className="relative min-h-[95vh] w-full overflow-hidden group">
                    {/* Background Image */}
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark Gradient Overlay for text readability */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" /> */}

                    {/* Text Content Overlay */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-10 md:p-16 lg:p-24 max-w-2xl">
                        <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            {title}
                        </h2>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-baseline gap-3">
                                <span className="font-jakarta text-xl font-semibold text-white/90">
                                    {featuredProduct.name}
                                </span>
                                <span className="font-jakarta text-lg font-bold text-primary">
                                    {formatCurrency(featuredProduct.price)}
                                </span>
                            </div>

                            <Link
                                href={categorySlug}
                                className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-primary group"
                            >
                                <span className="border-b border-white group-hover:border-primary pb-0.5">
                                    {totalProductsInCategory} options available
                                </span>
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="mt-10">
                            <Link
                                href={categorySlug}
                                className="inline-flex items-center justify-center bg-white px-8 py-4 font-montserrat text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-primary hover:text-white"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        );
    }

    // ==========================================
    // SPLIT LAYOUTS (70-30 & 30-70)
    // ==========================================
    const isImageLeft = layout === "70-30";
    const gridClass = layout === "70-30"
        ? "lg:grid-cols-[70fr_30fr]"
        : "lg:grid-cols-[30fr_70fr]";

    return (
        <div className={`grid grid-cols-1 gap-2 ${gridClass} min-h-[95vh]`}>


            <ScrollReveal
                direction={isImageLeft ? "right" : "left"}
                className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-16 overflow-hidden ${isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
            >
                {/* BG Image for Text Side */}
                <Image
                    src={textImage} // Uses the same image as the main side
                    alt={`${title} background`}
                    fill
                    quality={100}
                    sizes="30vw"
                    className="object-cover"
                />

                {/* Dark Overlay for readability */}
                {/* <div className="absolute inset-0 bg-black/60" /> */}

                {/* Content pushed above the overlay */}
                <div className="relative z-10">
                    <h2 className="font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {title}
                    </h2>

                    <ProductInfo />
                    <CTAButton />
                </div>
            </ScrollReveal>

            {/* Image Section */}
            <ScrollReveal
                direction={isImageLeft ? "left" : "right"}
                className={`relative overflow-hidden bg-black/5 ${isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
            >
                <div className="relative h-full w-full max-w-[1200px] mx-auto">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        quality={100}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 hover:scale-101"
                    />
                </div>
            </ScrollReveal>

        </div>
    );
}