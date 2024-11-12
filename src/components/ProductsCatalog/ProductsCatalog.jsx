import styles from './product.module.scss';
import Product from '../ProductItem/ProductItem';
import Loader from '../Loader/Loader';
import Filter from '../FilterPanel/FilterPanel';
import {useProductCatalog} from "./useProductCatalog";
import Search from "../Search/Search";

const ProductsCatalog = () => {
    const {
        loading,
        currentPage,
        filteredProducts,
        itemsPerShow,
        filters,
        setFilters,
        pageNumbers,
        handlePageChange,
        setFilteredProducts,
        products
    } = useProductCatalog()

    if (loading) return <Loader/>;

    return (
        <section className={styles['products']}>
            <div className="container">
                <div className={styles["products__section-main-panel"]}>
                    <Filter setFilter={setFilters} filters={filters} setFilteredProducts={setFilteredProducts} products={products} />
                    <div className={styles['products__main-panel']}>
                        <Search products={products} setFilteredProducts={setFilteredProducts} filter={filters} setFilter={setFilters} />
                        {
                            !(filteredProducts.length === 0) ? (
                                filteredProducts?.slice((currentPage - 1) * itemsPerShow, currentPage * itemsPerShow).map(product => (
                                        <Product key={product.id} product={product}/>
                                    ))
                            ) : (
                                <h1>No Products Found</h1>
                            )
                        }

                    </div>
                    <div className={styles['pagination']}>
                        {
                            pageNumbers.map((item, index) => {
                                return (
                                    <button className={styles[`${currentPage === item ? 'pagination__active' : ''}`]}
                                            onClick={() => handlePageChange(item)} key={index}>{item}</button>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProductsCatalog;
