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

    const ProductInfo = () => (
        <div className="mt-6 space-y-2 bg-white rounded-3xl p-5">
            <div className="flex items-baseline gap-2">
                <span className="font-montserrat text-md font-semibold text-black/80">
                    {featuredProduct.name} :
                </span>
                <span className="font-jakarta text-lg font-bold text-primary">
                    {formatCurrency(featuredProduct.price)}
                </span>
            </div>

            <Link
                href={categorySlug}
                className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold uppercase tracking-normal text-primary transition-colors hover:text-primary group"
            >
                <span className="border-b border-primary group-hover:border-primary pb-0.5">
                    {totalProductsInCategory} options available
                </span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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


    if (layout === "100") {
        return (
            <ScrollReveal direction="up">
                <div className="relative min-h-[95vh] h-full w-full flex items-end justify-end overflow-hidden group">

                    <Image
                        src={image}
                        alt={title}
                        fill
                        quality={100}
                        sizes="100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="relative z-10 flex h-full flex-col justify-end p-10 md:p-11 lg:p-11">


                        <div className="mt-6 space-y-2 bg-white rounded-3xl p-5">

                            <div className="flex items-baseline gap-2">
                                <span className="font-montserrat text-md font-semibold text-black/80">
                                    {featuredProduct.name} :
                                </span>
                                <span className="font-jakarta text-lg font-bold text-primary">
                                    {formatCurrency(featuredProduct.price)}
                                </span>
                            </div>

                            <Link
                                href={categorySlug}
                                className="inline-flex items-center gap-2 font-montserrat text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary group"
                            >
                                <span className="border-b border-primary group-hover:border-primary pb-0.5">
                                    {totalProductsInCategory} options available
                                </span>
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>


                    </div>
                </div>
            </ScrollReveal>
        );
    }


    const isImageLeft = layout === "70-30";
    const gridClass = layout === "70-30"
        ? "lg:grid-cols-[70fr_30fr]"
        : "lg:grid-cols-[30fr_70fr]";

    return (
        <div className={`grid grid-cols-1 gap-2 ${gridClass} min-h-[95vh]`}>


            <ScrollReveal
                direction={isImageLeft ? "right" : "left"}
                className={`relative flex flex-col justify-center p-2 md:p-4 lg:p-4 overflow-hidden ${isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
            >

                <Image
                    src={textImage}
                    alt={`${title} background`}
                    fill
                    quality={100}
                    sizes="30vw"
                    className="object-cover"
                />

                <div className="relative h-full flex flex-col justify-between py-4 z-10">
                    <h2 className="font-jakarta opacity-0 text-3xl md:text-3xl lg:text-3xl font-bold text-white bg-primary p-2 rounded-xl leading-tight">
                        {title}
                    </h2>

                    <ProductInfo />

                </div>
            </ScrollReveal>

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
                    <div className="mt-10 absolute bottom-6 right-5">
                        <Link
                            href={categorySlug}
                            className="inline-flex items-center justify-center  px-8 py-4 font-montserrat text-xs font-semibold uppercase tracking-wider text-black transition-colors border-1 border-primary bg-primary hover:border-1 hover:border-primary hover:bg-transparent hover:text-primary"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </ScrollReveal>

        </div>
    );
}