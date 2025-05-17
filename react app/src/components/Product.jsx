import {useContext} from 'react';
import './Product.css'; // CSS import
import { cartcontext } from '../App';
export const Product = ({ product,}) => {
  const {cart,setcart}=useContext(cartcontext);
  const Addtocart=()=>{
    setcart([...cart,product]);
  }
  const Removecart=()=>{
    setcart(cart.filter((c)=> c.id!==product.id));
  }
  return (
    <div className="product-card">
      <img className="product-image" src={product.pic} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">Price: ₹{product.price}</p>
        {cart.includes(product)?(
          <button className='add-cart' onClick={Removecart}>remove from cart</button>
        ):(
          <button className='rem-cart' onClick={Addtocart}>add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
