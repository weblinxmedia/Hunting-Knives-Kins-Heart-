export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    price: number; // Store in cents to avoid JS rounding errors (e.g., 12999 = $129.99)
    images: string[];
    bladeMaterial: string;
    description: string;
}

export interface Category {
    id: string;
    slug: string;
    name: string;
    description: string;
}