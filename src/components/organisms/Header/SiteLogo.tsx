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
                "whitespace-nowrap font-outfit text-xl font-bold",
                "uppercase tracking-[0.18em] transition-colors duration-300",
                tone === "light" ? "text-white" : "text-black",
            )}
        >
            Blade
            <span
                className={cn(
                    tone === "light" ? "text-white" : "text-primary",
                )}
            >
                &Co
            </span>
        </Link>
    );
}