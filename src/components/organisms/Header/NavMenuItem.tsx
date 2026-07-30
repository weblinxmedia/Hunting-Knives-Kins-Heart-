import type { NavigationCategory } from "@/types/navigation";

import { AnimatedNavLink } from "./AnimatedNavLink";
import { MegaMenu } from "./MegaMenu";
import type { HeaderTone } from "./types";

interface NavMenuItemProps {
    category: NavigationCategory;
    tone: HeaderTone;
}

export function NavMenuItem({
    category,
    tone,
}: NavMenuItemProps) {
    return (
        <li className="group/nav static flex h-20 items-center">
            <AnimatedNavLink
                href={category.href}
                tone={tone}
            >
                {category.name}
            </AnimatedNavLink>
            <span className="flex items-center justify-center"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>

            <MegaMenu category={category} />
        </li>
    );
}