"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";

import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Sale calculation
    const isOnSale = product.compareAtPrice && product.compareAtPrice > product.price;
    const salePercentage = isOnSale
        ? Math.round(((product.compareAtPrice! - product.price) / product.compareAtPrice!) * 100)
        : 0;

    return (
        <div
            className="group relative flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative cursor-pointer aspect-square w-full overflow-hidden bg-black/5 mb-4">

                {/* Image 1 (Main) */}
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={`object-cover transition-opacity duration-450 ${isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Image 2 (Hover) */}
                {product.images[1] && (
                    <Image
                        src={product.images[1]}
                        alt={`${product.name} alternate view`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className={`object-cover transition-opacity duration-450 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                )}

                {/* Sale Badge */}
                {isOnSale && (
                    <div className="absolute left-3 top-3 z-10 bg-primary/90 px-2.5 py-1 font-montserrat text-[12px] font-medium text-white">
                        Sale -{salePercentage}%
                    </div>
                )}

                {/* Sliding Add to Cart Button (Bottom) */}
                <div className="absolute bottom-0  left-0 right-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:bottom-2">
                    <button
                        className="flex w-[80%] mx-auto cursor-pointer rounded-3xl shadow-xl items-center justify-center gap-2 bg-black py-3.5 font-montserrat text-xs font-semibold uppercase tracking-wider text-black transition-colors bg-white hover:bg-primary"
                    >
                        <ShoppingBag size={19} /> Add to Cart
                    </button>
                </div>

                {/* Sliding Wishlist & Quick View Buttons (Right) */}
                <div className="absolute right-0 top-3 flex flex-col gap-2  translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:right-3">
                    <button aria-label="Add to wishlist" className="flex h-11 w-11 items-center rounded-full justify-center cursor-pointer bg-white shadow-md transition-colors hover:bg-primary hover:text-white/90">
                        <Heart size={22} />
                    </button>
                    <button
                        aria-label="Quick view"
                        onClick={() => onQuickView(product)}
                        className="flex h-11 w-11 items-center justify-center cursor-pointer bg-white rounded-full shadow-md transition-colors hover:bg-primary hover:text-white/90"
                    >
                        <Eye size={22} />
                    </button>
                </div>
            </div>

            {/* Card Details */}
            <Link href={`/product/${product.slug}`} className="flex flex-col">
                <p className="font-outfit text-xs font-normal tracking-normal text-black/50">
                    {product.subcategory || product.category}
                </p>
                <h3 className="mt-1 font-outfit text-base font-medium uppercase leading-tight text-black  transition-colors">
                    {product.name}
                </h3>

                {/* Reviews */}
                <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex items-center gap-0 text-primary">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={15}
                                fill={i < Math.round(product.reviews.average) ? "currentColor" : "none"}
                                strokeWidth={1}
                            />
                        ))}
                    </div>
                    <span className="font-montserrat text-xs text-black/40">({product.reviews.count})</span>
                </div>

                {/* Pricing */}
                <div className="mt-2 flex items-center gap-1">
                    <span className="font-jakarta text-base font-semibold text-black">
                        {formatCurrency(product.price)}
                    </span>
                    {isOnSale && (
                        <span className="font-jakarta text-sm font-medium text-black/40 line-through">
                            {formatCurrency(product.compareAtPrice!)}
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
}