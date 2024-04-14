import useProduct from "../hooks/useProduct";
import React, { useEffect, useState } from "react";
import {  useParams
} from "react-router-dom";

const ProductDetail = () => {
  let { name } = useParams();
  const getProduct = useProduct();
  const [product, setProducts] = useState([]);
  useEffect( () => {
    getProduct(name).then(value => setProducts(value));

  }, [name]);
  return (
  <div className="product-info">
    <span className="product-name">Product: {product.name}</span>
    <span className="product-calorie">Calorie: {product.calorie}</span>
    <span className="product-category">Category: {product.category}</span>
  </div>
  )
  
}

export default ProductDetail;
