import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css'
import noImage from './../assets/no-image.jpg'

export const ProductImage = ({img}: {img?: string}) => {
    const { product } = useContext(ProductContext);
    let image = img ? img : product.img;
    return (
        <img className={styles.productImg} src={ image? image :  noImage} alt="Product" />
    )
}
