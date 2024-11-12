import { useEffect, useCallback } from "react";

export const useFilterPanel = (filters, setFilter, setFilteredProducts, products) => {
    const filtersCatalogue = {
        brand: [
            { id: 0, name: "Brand A" },
            { id: 1, name: "Brand B" },
            { id: 2, name: "Brand C" },
            { id: 3, name: "Brand D" },
            { id: 4, name: "Brand E" },
        ],
        category: [
            { id: 0, name: "Electronics" },
            { id: 1, name: "Footwear" },
            { id: 2, name: "Clothing" },
        ],
        rating: [0, 1, 2, 3, 4, 5],
    };

    const filterProducts = useCallback(() => {
        return products.filter((product) => {
            const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
            const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
            const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
            const ratingMatch = product.rating >= filters.rating;
            const searchMatch = filters.text === '' || product.name.toLowerCase().includes(filters.text.toLowerCase());

            return brandMatch && categoryMatch && priceMatch && ratingMatch && searchMatch;
        });
    }, [filters, products]);

    const handleOnChange = (e, key) => {
        let updatedFilters;
        const value = e.target.value;

        if (key === 'brand' || key === 'category') {
            updatedFilters = {
                ...filters,
                [key]: filters[key].includes(value)
                    ? filters[key].filter(item => item !== value)
                    : [...filters[key], value]
            };
        } else if (key === 'priceRange') {
            const newPriceRange = [...filters.priceRange];
            if (e.target.name === "minPrice") {
                newPriceRange[0] = value;
            } else {
                newPriceRange[1] = value;
            }
            updatedFilters = { ...filters, priceRange: newPriceRange };
        } else if (key === 'rating') {
            updatedFilters = { ...filters, rating: parseFloat(value) };
        }

        setFilter(updatedFilters);
    };

    useEffect(() => {
        const filtered = filterProducts();
        setFilteredProducts(filtered);
    }, [filterProducts]);

    return {
        filtersCatalogue,
        handleOnChange
    };
};
