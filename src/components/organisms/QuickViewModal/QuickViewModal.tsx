"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, Star, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

import { IconButton } from "@/components/atoms/IconButton";
import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface QuickViewModalProps {
    product: Product | null;
    onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const isOnSale = product?.compareAtPrice && product.compareAtPrice > product.price;

    // Reset image index and quantity when product changes
    useEffect(() => {
        setCurrentImageIndex(0);
        setQuantity(1);
    }, [product?.id]);

    // Auto-play carousel logic
    useEffect(() => {
        if (!product || product.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        }, 3000); // Changes image every 3 seconds

        return () => clearInterval(interval);
    }, [product]);

    // Manual navigation handlers
    const goToNext = useCallback(() => {
        if (!product) return;
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, [product]);

    const goToPrev = useCallback(() => {
        if (!product) return;
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }, [product]);

    return (
        <AnimatePresence>
            {product && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/60"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed inset-0 z-[120] flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white text-black shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <div className="absolute right-3 top-3 z-10">
                                <IconButton label="Close" onClick={onClose} className="bg-white rounded-full cursor-pointer shadow-md hover:text-primary">
                                    <X size={20} />
                                </IconButton>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Left: Image Carousel */}
                                <div className="relative aspect-square h-full w-full overflow-hidden bg-black/5">

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 h-full"
                                        >
                                            <Image
                                                src={product.images[currentImageIndex]}
                                                alt={`${product.name} view ${currentImageIndex + 1}`}
                                                fill
                                                quality={100}
                                                className="object-cover"
                                                sizes="50vw"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows (Only show if more than 1 image) */}
                                    {product.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={goToPrev}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-white rounded-full shadow-md cursor-pointer transition-colors hover:bg-primary hover:text-white"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <button
                                                onClick={goToNext}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center bg-white rounded-full shadow-md cursor-pointer transition-colors hover:bg-primary hover:text-white"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </>
                                    )}

                                    {/* Dots Indicator */}
                                    {product.images.length > 1 && (
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                            {product.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-4 bg-primary' : 'w-1.5 bg-black/30'
                                                        }`}
                                                    aria-label={`Go to image ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right: Details (No changes here) */}
                                <div className="flex flex-col p-6 md:p-8">
                                    <h2 className="font-montserrat text-3xl font-semibold">{product.name}</h2>

                                    {/* Reviews */}
                                    <div className="mt-1 flex items-center gap-2">
                                        <div className="flex items-center gap-0.5 text-primary">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < Math.round(product.reviews.average) ? "currentColor" : "none"} strokeWidth={1} />
                                            ))}
                                        </div>
                                        <span className="text-sm text-black/50">({product.reviews.count} reviews)</span>
                                    </div>

                                    {/* Pricing */}
                                    <div className="mt-1 flex items-baseline gap-2">
                                        <span className="font-geist text-4xl font-bold text-primary">{formatCurrency(product.price)}</span>
                                        {isOnSale && (
                                            <span className="font-geist text-lg text-black/40 line-through">{formatCurrency(product.compareAtPrice!)}</span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mt-2 font-outfit max-w-auto md:max-w-[350px] text-sm font-regular leading-tight text-black/60">
                                        {product.description}
                                    </p>

                                    {/* Quantity & Add to Cart */}
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className="flex items-center border border-black/15">
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-12 w-14 cursor-pointer items-center justify-center hover:bg-black/5"><Minus size={17} /></button>
                                            <span className="flex h-12 w-12 items-center justify-center font-montserrat text-sm font-semibold">{quantity}</span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="flex h-12 w-14 cursor-pointer items-center justify-center hover:bg-black/5"><Plus size={17} /></button>
                                        </div>
                                        <button className="flex flex-1 items-center justify-center gap-2 bg-primary cursor-pointer h-12 px-6 font-outfit text-xs font- uppercase tracking-wider text-white transition-colors hover:bg-black">
                                            <ShoppingBag size={16} /> Add to Cart
                                        </button>
                                    </div>

                                    {/* Meta Details */}
                                    <div className="mt-2 space-y-2 border-t border-black/10 pt-6">
                                        <p className="font-montserrat text-sm"><span className="font-semibold text-black">SKU :</span> {product.sku}</p>
                                        <p className="font-montserrat text-sm"><span className="font-semibold text-black">Type :</span> {product.category}</p>
                                        <p className="font-montserrat text-sm"><span className="font-semibold text-black">Vendor :</span> {product.vendor}</p>
                                    </div>

                                    {/* View Details */}
                                    <Link
                                        href={`/product/${product.slug}`}
                                        onClick={onClose}
                                        className="mt-6 flex h-12 items-center justify-center border-2 border-black font-montserrat text-xs font-semibold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white"
                                    >
                                        View Full Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}