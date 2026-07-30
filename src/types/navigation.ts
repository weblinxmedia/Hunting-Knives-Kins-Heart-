export interface NavigationProduct {
    id: string;
    name: string;
    href: string;
}

export interface NavigationSubcategory {
    id: string;
    name: string;
    href: string;
    products: NavigationProduct[];
}

export interface NavigationCategory {
    id: string;
    name: string;
    href: string;
    subcategories: NavigationSubcategory[];
}