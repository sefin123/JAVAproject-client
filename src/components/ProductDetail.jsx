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
    <div>
      <span>
        {product.name}:{product.calorie}
      </span>
    </div>
  )
  
}

export default ProductDetail;
