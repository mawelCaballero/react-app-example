import {  ProductCard } from "../components/ProductCard"

const product = {

    id: 1,
    name: 'Coffee Mug developer',
    description: 'Coffee mug designed for developers',
    price: 20,
    img: './coffee-mug.png'

}


export const ShoppingPage = () => {
  const { id, name, description, price, img } = product;
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>
        <div style={{display: 'flex', flexDirection : 'row', flexWrap: 'wrap'   }}>
        <ProductCard product={product}>
        <ProductCard.Image img={img}/>
        <ProductCard.Name name={name}/>
        <ProductCard.Buttons />        
        </ProductCard>
        </div>
        
    </div>

  )
}
