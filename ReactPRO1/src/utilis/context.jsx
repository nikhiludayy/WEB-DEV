import React from "react";
import axios from "./axios";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
export const ProductContext = createContext();
const context = (props) => {
  const [products, setProducts] = useState(null);

  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{getproducts()},[])
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default context;
