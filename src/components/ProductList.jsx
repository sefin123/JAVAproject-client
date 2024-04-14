import React, { useEffect, useState } from "react";
import useProductList from "../hooks/useProductList";
import {Link} from "react-router-dom";

const ProductList = () => {
  const getProducts = useProductList();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(value => setProducts(value));
  }, []);
  return (
    <div>
      <h4>
        List of products
      </h4>
      <ul> 
        {
          products && 
          products?.map((product) => {
            return (<li key={product.id}>
              <a href={`/food/${product.name}`}>Product:{product.name}</a>
            </li>)
          })
        }
      </ul>
    </div>
  )
}
export default ProductList;
