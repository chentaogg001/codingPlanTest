import { create } from 'zustand';
import { Category, Product, products } from '../data/products';

interface StoreState {
    selectedCategory: Category | 'all';
    searchQuery: string;
    selectedProduct: Product | null;
    setSelectedCategory: (category: Category | 'all') => void;
    setSearchQuery: (query: string) => void;
    setSelectedProduct: (product: Product | null) => void;
    getFilteredProducts: () => Product[];
}

export const useStore = create<StoreState>((set, get) => ({
    selectedCategory: 'all',
    searchQuery: '',
    selectedProduct: null,
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSelectedProduct: (product) => set({ selectedProduct: product }),
    getFilteredProducts: () => {
        const { selectedCategory, searchQuery } = get();
        return products.filter((product) => {
            const matchesCategory =
                selectedCategory === 'all' || product.category === selectedCategory;
            const matchesSearch =
                searchQuery === '' ||
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    },
}));
