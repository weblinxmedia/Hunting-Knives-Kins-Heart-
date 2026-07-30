import Link from "next/link";
import {
    Search,
    ShoppingBag,
    Truck,
    UserRound,
} from "lucide-react";

import { IconButton } from "@/components/atoms/IconButton";
import { cn } from "@/lib/utils";

import type { HeaderTone } from "./types";

interface HeaderActionsProps {
    tone: HeaderTone;
    onSearchOpen: () => void;
}

export function HeaderActions({
    tone,
    onSearchOpen,
}: HeaderActionsProps) {
    const foregroundColor =
        tone === "light" ? "text-white" : "text-black";

    return (
        <div
            className={cn(
                "flex items-center justify-end gap-0.5 2xl:gap-2",
                foregroundColor,
            )}
        >

            <button
                type="button"
                aria-label="Select country and currency"
                className={cn(
                    "hidden items-center cursor-pointer gap-1.5 px-2",
                    "font-montserrat text-[11px] font-semibold",
                    "transition-colors hover:text-primary xl:flex",
                )}
            >
                <span aria-hidden="true">🇺🇸</span>
                <span>USD</span>
            </button>

            <IconButton
                label="Open product search"
                onClick={onSearchOpen}
                className="hover:text-primary cursor-pointer"
            >
                <Search size={24} strokeWidth={1.4} />
            </IconButton>

            <Link
                href="/tracking"
                className={cn(
                    "hidden items-center gap-2 px-2",
                    "font-montserrat text-[11px] font-semibold",
                    "uppercase tracking-wider cursor-pointer",
                    "transition-colors hover:text-primary xl:flex",
                )}
            >
                <Truck size={25} strokeWidth={1.4} />

                <span className="hidden 2xl:inline">
                    Track your shipment
                </span>
            </Link>



            <Link
                href="/profile"
                aria-label="Your profile"
                title="Your profile"
                className="hidden size-10 cursor-pointer items-center justify-center transition-colors hover:text-primary sm:inline-flex"
            >
                <UserRound size={24} strokeWidth={1.4} />
            </Link>

            <Link
                href="/cart"
                aria-label="Shopping cart"
                title="Shopping cart"
                className="relative inline-flex cursor-pointer size-10 items-center justify-center transition-colors hover:text-primary"
            >
                <ShoppingBag size={24} strokeWidth={1.4} />

                <span
                    className={`
            absolute right-0.5 top-0.5 flex size-4
            items-center justify-center rounded-full
            bg-primary font-montserrat text-[9px]
            font-semibold text-white 
          `}
                >
                    0
                </span>
            </Link>
        </div>
    );
}