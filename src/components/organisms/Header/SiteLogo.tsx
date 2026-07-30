import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { HeaderTone } from "./types";

interface SiteLogoProps {
    tone: HeaderTone;
    onClick?: () => void;
}

export function SiteLogo({
    tone,
    onClick,
}: SiteLogoProps) {
    return (
        <Link
            href="/"
            aria-label="Blade and Company home"
            onClick={onClick}
            className={cn(
                "whitespace-nowrap font-outfit text-xl mt-5 font-bold",
                "uppercase tracking-[0.18em] transition-colors duration-300",
                tone === "light" ? "text-white" : "text-black",
            )}
        >

            <Image src="/images/logo/logo.webp" alt="" width={100} height={100} className="w-auto h-[95px]" />
            {/* Blade
            <span
                className={cn(
                    tone === "light" ? "text-white" : "text-primary",
                )}
            >
                &Co
            </span> */}
        </Link>
    );
}