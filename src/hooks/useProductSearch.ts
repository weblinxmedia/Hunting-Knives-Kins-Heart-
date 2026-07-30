"use client";

import { useMemo } from "react";

import type { Product } from "@/types";

export function useProductSearch(
    products: Product[],
    query: string,
    limit = 5,
) {
    return useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return [];
        }

        return products
            .filter((product) => {
                const searchableContent = [
                    product.name,
                    product.description,
                    product.category,
                    product.bladeMaterial,
                ]
                    .filter(Boolean)
                    .join(" ")
                    .toLowerCase();

                return searchableContent.includes(normalizedQuery);
            })
            .slice(0, limit);
    }, [limit, products, query]);
}