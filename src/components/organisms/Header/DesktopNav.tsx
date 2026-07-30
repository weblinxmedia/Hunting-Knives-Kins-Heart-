"use client";
import { NavDropdown } from './NavDropdown';
import Link from 'next/link';

const navItems = [
    { label: "Best Sellers", slug: "best-sellers" },
    { label: "Custom", slug: "custom" },
    { label: "Source", slug: "source" },
    { label: "Accessories", slug: "accessories" },
];

export const DesktopNav = ({ isScrolled }: { isScrolled: boolean }) => {
    return (
        <nav className="hidden md:flex items-center gap-8 font-montserrat text-sm font-semibold uppercase tracking-wider">
            {navItems.map((item) => (
                <div key={item.slug} className="group relative">
                    <Link
                        href={`/category/${item.slug}`}
                        className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:bg-primary after:w-0 group-hover:after:w-full after:transition-all"
                    >
                        {item.label}
                    </Link>
                    <NavDropdown categorySlug={item.slug} />
                </div>
            ))}
        </nav>
    );
};