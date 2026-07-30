import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { NavigationCategory } from "@/types/navigation";

interface MegaMenuProps {
    category: NavigationCategory;
}

export function MegaMenu({
    category,
}: MegaMenuProps) {
    return (
        <div
            className={`
        invisible pointer-events-none absolute
        left-0 right-0 top-full
        translate-y-0 border-t border-black/10
        bg-white text-black opacity-0 shadow-2xl
        transition-[opacity,transform,visibility]
        duration-300 ease-out
        group-hover/nav:visible
        group-hover/nav:pointer-events-auto
        group-hover/nav:translate-y-0
        group-hover/nav:opacity-100
        group-focus-within/nav:visible
        group-focus-within/nav:pointer-events-auto
        group-focus-within/nav:translate-y-0
        group-focus-within/nav:opacity-100
      `}
        >
            <div className="p-8">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <p className="mb-1 font-montserrat text-xs font-medium uppercase tracking-[0.10em] text-primary">
                            Explore
                        </p>

                        <h2 className="font-outfit text-2xl font-semibold ">
                            {category.name}
                        </h2>
                    </div>

                    <Link
                        href={category.href}
                        className="group/link inline-flex items-center gap-2 font-montserrat text-xs font-semibold uppercase tracking-wider"
                    >
                        View all {category.name}

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-x-10 gap-y-5 xl:grid-cols-4">
                    {category.subcategories.map((subcategory) => (
                        <section key={subcategory.id}>
                            <Link
                                href={subcategory.href}
                                className="inline-block font-jakarta text-base font-semibold transition-colors hover:text-primary"
                            >
                                {subcategory.name}
                            </Link>

                            <ul className="mt-2 space-y-0.5">
                                {subcategory.products
                                    .slice(0, 4)
                                    .map((product) => (
                                        <li key={product.id}>
                                            <Link
                                                href={product.href}
                                                className="font-montserrat text-sm text-black/60 transition-colors hover:text-primary"
                                            >
                                                {product.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}