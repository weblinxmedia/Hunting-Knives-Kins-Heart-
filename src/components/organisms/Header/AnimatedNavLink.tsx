import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { HeaderTone } from "./types";

interface AnimatedNavLinkProps {
    href: string;
    children: ReactNode;
    tone: HeaderTone;
    className?: string;
}

export function AnimatedNavLink({
    href,
    children,
    tone,
    className,
}: AnimatedNavLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "relative inline-flex h-full items-center",
                "font-montserrat text-[11px] font-semibold",
                "uppercase tracking-[0.12em]",
                "transition-colors duration-300",
                "after:absolute after:bottom-5 after:left-0",
                "after:h-0.5 after:w-full after:origin-left",
                "after:scale-x-0 after:bg-primary",
                "after:transition-transform after:duration-300",
                "after:ease-out",
                "hover:text-primary hover:after:scale-x-100",
                "group-hover/nav:text-primary",
                "group-hover/nav:after:scale-x-100",
                "group-focus-within/nav:text-primary",
                "group-focus-within/nav:after:scale-x-100",
                tone === "light" ? "text-white" : "text-black",
                className,
            )}
        >
            {children}
        </Link>
    );
}