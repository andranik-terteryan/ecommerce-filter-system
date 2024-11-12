import { useCallback } from "react";
import { debounce } from "../../helpers/helpers";

export const useSearch = (setFilteredProducts, products, filter, setFilter) => {
    const inputHandler = useCallback((e) => {
        const lowerCaseText = e.target.value.toLowerCase();

        setFilter(prevFilter => ({ ...prevFilter, text: lowerCaseText }));

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(lowerCaseText)
        );

        setFilteredProducts(filtered);
    }, [products, setFilter, setFilteredProducts]);



    const processChange = useCallback(debounce(inputHandler, 300), [inputHandler]);

    return {
        processChange
    };
};
