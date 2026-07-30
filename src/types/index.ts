export interface ProductReview {
    average: number;
    count: number;
}

export interface Product {

    id: string;
    slug: string;
    name: string;
    category: string;
    subcategory?: string;
    price: number; // in cents
    compareAtPrice?: number; // in cents, for sales
    images: string[];
    bladeMaterial: string;
    description: string;
    sku: string;
    vendor: string;
    isBestSeller?: boolean;
    isNewArrival?: boolean;
    reviews: ProductReview;
}