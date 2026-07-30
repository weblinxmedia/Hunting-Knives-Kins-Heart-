import { Menu } from "lucide-react";

import { IconButton } from "@/components/atoms/IconButton";
import type { NavigationCategory } from "@/types/navigation";

import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderActions } from "./HeaderActions";
import { SiteLogo } from "./SiteLogo";
import type { HeaderTone } from "./types";

interface HeaderShellProps {
    categories: NavigationCategory[];
    tone: HeaderTone;
    onMobileMenuOpen: () => void;
    onSearchOpen: () => void;
}

export function HeaderShell({
    categories,
    tone,
    onMobileMenuOpen,
    onSearchOpen,
}: HeaderShellProps) {
    return (
        <div className="relative mx-auto max-w-[1200px] px-4 md:px-0 lg:px-0">
            <div className="grid min-h-20 grid-cols-[1fr_auto_1fr] py-4 items-center">
                <div className="flex min-w-0 items-center justify-start">
                    <div className="xl:hidden">
                        <IconButton
                            label="Open mobile navigation"
                            onClick={onMobileMenuOpen}
                            className={
                                tone === "light"
                                    ? "text-white hover:text-primary"
                                    : "text-black hover:text-primary"
                            }
                        >
                            <Menu size={23} strokeWidth={1.7} />
                        </IconButton>
                    </div>

                    <DesktopNavigation
                        categories={categories}
                        tone={tone}
                    />
                </div>

                <div className="flex items-center justify-center px-3">
                    <SiteLogo tone={tone} />
                </div>

                <HeaderActions
                    tone={tone}
                    onSearchOpen={onSearchOpen}
                />
            </div>
        </div>
    );
}