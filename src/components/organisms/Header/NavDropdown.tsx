"use client";
import { motion, AnimatePresence } from 'framer-motion';

interface NavDropdownProps {
    categorySlug: string;
}

export const NavDropdown = ({ categorySlug }: NavDropdownProps) => {
    // Dummy data for now (later will come from Supabase)
    const subcategories = [
        { name: "Fixed Blade", slug: "fixed-blade" },
        { name: "Folding", slug: "folding" },
    ];

    const products = [
        { name: "Trailmaster Fixed Blade", slug: "trailmaster-fixed-blade" },
        { name: "Woodsman Axe", slug: "woodsman-axe" },
    ];

    return (
        <AnimatePresence>
            <motion.div
                className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-md py-4 text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
            >
                {subcategories.map((sub) => (
                    <div key={sub.slug} className="px-5 py-1">
                        <a href={`/category/${categorySlug}/${sub.slug}`} className="font-semibold text-sm hover:text-primary">
                            {sub.name}
                        </a>
                        <div className="pl-3 mt-1 space-y-1">
                            {products.slice(0, 4).map((prod) => (
                                <a key={prod.slug} href={`/product/${prod.slug}`} className="block text-sm text-gray-600 hover:text-primary">
                                    {prod.name}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="border-t mt-3 pt-3 px-5">
                    <a href={`/category/${categorySlug}`} className="text-xs text-primary font-semibold">See All →</a>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};