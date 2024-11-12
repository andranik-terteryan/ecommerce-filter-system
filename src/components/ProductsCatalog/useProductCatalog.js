import {useEffect, useState, useMemo} from "react";
import mockData from "../../utilities/mockData";

export const useProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerShow = 2;
    const [filters, setFilters] = useState(() => {
        const storedFilters = JSON.parse(localStorage.getItem("filters"));
        return storedFilters || {
            category: [],
            brand: [],
            priceRange: [0, 500],
            rating: 0,
            text: "",
        };
    });


    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filters));
    }, [filters]);

    useEffect(() => {
        const storedFilters = JSON.parse(localStorage.getItem("filters"));
        if (storedFilters) {
            setFilters(storedFilters);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("filters", JSON.stringify(filters));
    }, [filters]);

    const handlePageChange = (page) => setCurrentPage(page);

    useEffect(() => {
        setTimeout(() => {
            setProducts(mockData);
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        setFilteredProducts(products)
    },[products])


    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);

    useEffect(() => {
        const isFiltersEmpty =
            filters.brand.length === 0 &&
            filters.category.length === 0 &&
            filters.priceRange[0] === 0 &&
            filters.priceRange[1] === 500 &&
            filters.text === "" &&
            filters.rating === 0;

        if (isFiltersEmpty) {
            setFilteredProducts(products);
        }
    }, [filters, products]);


    const totalPages = useMemo(() => Math.ceil(filteredProducts.length / itemsPerShow), [filteredProducts.length]);
    const pageNumbers = useMemo(() => Array.from({length: totalPages}, (_, index) => index + 1), [totalPages]);


    return {
        loading,
        currentPage,
        filteredProducts,
        setFilteredProducts,
        itemsPerShow,
        filters,
        setFilters,
        pageNumbers,
        handlePageChange,
        products
    };
};
