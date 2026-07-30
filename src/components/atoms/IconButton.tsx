import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    children: ReactNode;
}

export function IconButton({
    label,
    children,
    className,
    type = "button",
    ...props
}: IconButtonProps) {
    return (
        <button
            type={type}
            aria-label={label}
            title={label}
            className={cn(
                "inline-flex size-10 items-center justify-center",
                "transition-colors duration-300",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                "focus-visible:outline-primary",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}