import { useContext, createContext, ReactElement } from 'react';
import styles from './../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';

export interface Props{
  children?: ReactElement | ReactElement[];
  product: ProductCardProps;
}

export const ProductContext =  createContext({}  as ProductContextProps);
const { Provider }  = ProductContext;



export const ProductName = ({name}: {name: string}) => {
    const { product } = useContext(ProductContext);
    let productName = name ? name : product.name;
    return (
        <span className={styles.productDescription}>{productName}</span>
    )
}


export const ProductButtons = () => {
  const { count, increaseBy } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
        <button onClick={()=>increaseBy(-1)} className={styles.buttonMinus}>-</button>  
        <div className={styles.countLabel}>{count}</div>
        <button onClick={()=> increaseBy(+1)} className={styles.buttonAdd}>+</button>
        </div>  
    )
}



export const ProductCard = ({children, product}: Props) => {
  const { count, increaseBy } = useProduct(0);
  return (
    <Provider value={{
      count, increaseBy, product}
    }>
      <div className={styles.productCard}>
       {children}
      </div>
    </Provider>
    
  )
}

ProductCard.Name = ProductName;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;