import type { NavigationCategory } from "@/types/navigation";

import { AnimatedNavLink } from "./AnimatedNavLink";
import { NavMenuItem } from "./NavMenuItem";
import type { HeaderTone } from "./types";

interface DesktopNavigationProps {
    categories: NavigationCategory[];
    tone: HeaderTone;
}

const MAX_DESKTOP_CATEGORIES = 4;

export function DesktopNavigation({
    categories,
    tone,
}: DesktopNavigationProps) {
    const desktopCategories = categories.slice(
        0,
        MAX_DESKTOP_CATEGORIES,
    );

    const hasAdditionalCategories =
        categories.length > MAX_DESKTOP_CATEGORIES;

    return (
        <nav
            aria-label="Primary navigation"
            className="hidden min-h-20 xl:block"
        >
            <ul className="flex h-full items-center gap-6 2xl:gap-8">
                {desktopCategories.map((category) => (
                    <NavMenuItem
                        key={category.id}
                        category={category}
                        tone={tone}
                    />
                ))}

                {hasAdditionalCategories && (
                    <li className="flex min-h-20 items-center">
                        <AnimatedNavLink
                            href="/categories"
                            tone={tone}
                        >
                            See All
                        </AnimatedNavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}