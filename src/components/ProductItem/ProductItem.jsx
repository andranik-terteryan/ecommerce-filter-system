import styles from './product.module.scss'
import Rating from 'react-rating';
import emptyStar from '../../assets/images/emptyStarIcon.svg'
import fullyStar from '../../assets/images/fullyStarIcon.svg'

const Product = ({ product }) => {
    return (
        <div className={styles['product']} >
            <div className={styles['product__image']} >
                <img src={product.imageUrl} alt={product.name} />
            </div>
            <h3 className={styles['product__name']} >{product.name}</h3>
            <p className={styles['product__category']} >{product.category}</p>
            <p className={styles['product__price']} >{product.price}$</p>
            <Rating
                initialRating={product.rating} 
                readonly
                emptySymbol={<img src={emptyStar} className="icon" />}
                fullSymbol={<img src={fullyStar} className="icon" />}
            />
        </div>
    )
}

export default Product
