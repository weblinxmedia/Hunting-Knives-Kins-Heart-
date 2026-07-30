import Image from "next/image";
import Link from "next/link";
import { Package } from "lucide-react";

import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/types";

interface SearchResultItemProps {
    product: Product;
    onNavigate: () => void;
}

export function SearchResultItem({
    product,
    onNavigate,
}: SearchResultItemProps) {
    const image = product.images?.[0];

    return (
        <Link
            href={`/product/${product.slug}`}
            onClick={onNavigate}
            className="group flex gap-4 border-b border-black/10 py-4"
        >
            <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden bg-black/5">
                {image ? (
                    <Image
                        src={image}
                        alt={product.name}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <Package
                        size={24}
                        className="text-black/30"
                    />
                )}
            </div>

            <div className="min-w-0 flex-1 py-1">
                <h3 className="line-clamp-2 font-jakarta text-sm font-semibold transition-colors group-hover:text-primary">
                    {product.name}
                </h3>

                <p className="mt-1 line-clamp-1 font-montserrat text-xs text-black/50">
                    {product.bladeMaterial}
                </p>

                <p className="mt-2 font-montserrat text-sm font-semibold">
                    {formatCurrency(product.price)}
                </p>
            </div>
        </Link>
    );
}