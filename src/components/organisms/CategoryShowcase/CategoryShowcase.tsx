import collectionsData from "@/data/collections.json";
import productsData from "@/data/products.json";
import { CollectionCard } from "@/components/molecules/CollectionCard";
import type { Product } from "@/types";

export function CategoryShowcase() {
    return (
        <section className="pb-16 md:pb-20 bg-white">
            <div className="flex flex-col gap-5 max-w-[1300px] px-4 sm:px-5 lg:px-8 mx-auto md:gap-5">
                {collectionsData.map((collection) => {
                    // Find the featured product data
                    const featuredProduct = productsData.find(
                        (p) => p.id === collection.featuredProductId
                    ) as Product | undefined;

                    // If the featured product doesn't exist in our data, skip this collection
                    if (!featuredProduct) return null;

                    // Count total products in this category
                    const totalProductsInCategory = productsData.filter(
                        (p) => p.category === collection.categoryName
                    ).length;

                    return (
                        <CollectionCard
                            key={collection.id}
                            title={collection.title}
                            categorySlug={collection.categorySlug}
                            categoryName={collection.categoryName}
                            featuredProduct={featuredProduct}
                            textImage={collection.textImage}
                            totalProductsInCategory={totalProductsInCategory}
                            image={collection.image}
                            layout={collection.layout as "70-30" | "100" | "30-70"}
                        />
                    );
                })}
            </div>
        </section>
    );
}