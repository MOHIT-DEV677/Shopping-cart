import { useState } from 'react';
import data from "../assets/product.json";
import Product from "../components/Product";
import './Home.css'; // CSS import

const Home = () => {
  const [product] = useState(data);
  
  return (
    <div className="product-container">
      {product.map((products) => (
        <Product key={products.id} product={products}/>
      ))}
    </div>
  );
};

export default Home;
