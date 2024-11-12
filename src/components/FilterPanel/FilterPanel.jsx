import styles from './filterPanel.module.scss';
import {useFilterPanel} from "./useFilterPanel";
import {useState} from "react";

const FilterPanel = ({setFilter, filters,setFilteredProducts,products}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {
        filtersCatalogue,
        handleOnChange
    } = useFilterPanel(filters, setFilter,setFilteredProducts,products)
    const handleToggleFilter = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={styles['toggle__overlay']}>
                <button onClick={handleToggleFilter} className={styles['toggle__filter']}>Filters</button>
            </div>
            {
                !!isOpen && (
                    <div onClick={handleToggleFilter} className={styles['filter__back']}></div>
                )
            }
            <div className={`${styles['filter']} ${styles[isOpen ? 'opened' : ""]}`}>
                <div className={styles['filter__group']}>
                    <h4 className={styles['filter__group-name']}>Brand</h4>
                    <ul className={styles['filter__group-list']}>
                        {filtersCatalogue.brand.map((brand) => (
                            <li key={brand.id}>
                                <input
                                    id={`brand-${brand.id}`}
                                    type="checkbox"
                                    name="brand"
                                    value={brand.name}
                                    checked={filters.brand.includes(brand.name)}
                                    onChange={(e) => handleOnChange(e, 'brand')}
                                />
                                <label htmlFor={`brand-${brand.id}`}>{brand.name}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['filter__group']}>
                    <h4 className={styles['filter__group-name']}>Category</h4>
                    <ul className={styles['filter__group-list']}>
                        {filtersCatalogue.category.map((category) => (
                            <li key={category.id}>
                                <input
                                    id={`cat-${category.id}`}
                                    type="checkbox"
                                    name="category"
                                    value={category.name}
                                    checked={filters.category.includes(category.name)}
                                    onChange={(e) => handleOnChange(e, 'category')}
                                />
                                <label htmlFor={`cat-${category.id}`}>{category.name}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles['filter__group']}>
                    <h4 className={styles['filter__group-name']}>Price Range</h4>
                    <div className={styles['filter__price-range']}>
                        <label>Min Price: ${filters.priceRange[0]}</label>
                        <input
                            type="range"
                            name="minPrice"
                            min="0"
                            max="500"
                            value={filters.priceRange[0]}
                            onChange={(e) => handleOnChange(e, 'priceRange')}
                        />
                        <label>Max Price: ${filters.priceRange[1]}</label>
                        <input
                            type="range"
                            name="maxPrice"
                            min="0"
                            max="500"
                            value={filters.priceRange[1]}
                            onChange={(e) => handleOnChange(e, 'priceRange')}
                        />
                    </div>
                </div>
                <div className={styles['filter__group']}>
                    <h4 className={styles['filter__group-name']}>Rating</h4>
                    <input
                        type="range"
                        name="rating"
                        min="0"
                        max="5"
                        value={filters.rating}
                        onChange={(e) => handleOnChange(e, 'rating')}
                    />
                    <label>{filters.rating} Stars</label>
                </div>
            </div>

        </>
    );
};

export default FilterPanel;
