import React from 'react';
import './style.css'

const Products = (props) => {
    return (
        <div className="productContainer">
            {
                props.products.map(product =>(
                    <div  className="product" key={product.id}>
                        <h3>{product.name} </h3>
                        <p>{product.desc}</p>
                        <p> $ {product.price} </p>
                <button onClick={()=> props.buyNow(product.id)}>Buy Now</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;