import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBannerCard() {
    return (
        <Link
            href="/new-arrivals"
            className="group relative flex h-full min-h-[400px] w-full flex-col items-start justify-end overflow-hidden bg-black p-2 md:p-4"
        >
            {/* Background Image */}
            <Image
                src="/images/newarrivals/0-1.jpg" // Make sure to add a moody, dark blade image here
                alt="New Arrivals Collection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="relative z-10 max-w-md">
                <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Fresh from the Forge
                </p>
                <h3 className="mt-2 font-montserrat text-2xl md:text-3xl font-bold text-white leading-tight">
                    New Season, New Steel
                </h3>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-white/80">
                    Discover the latest additions to the Kin's Heart collection. Crafted for the modern outdoorsman.
                </p>

                <div className="mt-3 inline-flex items-center gap-2 font-montserrat text-xs font-semibold uppercase tracking-wider text-white border-b border-white pb-1 transition-colors group-hover:text-primary group-hover:border-primary">
                    Shop New Arrivals
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
}