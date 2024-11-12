import styles from './search.module.scss';
import {useSearch} from "./useSearch";

const Search = ({ setFilteredProducts, products, filter, setFilter }) => {
    const {processChange} = useSearch(setFilteredProducts,products,filter,setFilter)
    

    return (
        <div className={styles["search"]}>
            <input
                className={styles['search__input']}
                onChange={processChange}
                type="text"
                placeholder="Search products"
            />
        </div>
    );
};

export default Search;
