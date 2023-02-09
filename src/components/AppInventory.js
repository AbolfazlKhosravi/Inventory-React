import { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryForm from "./categoryForm";
import ProductForm from "./productForm";
import {  toast } from 'react-toastify';
import FilrerProducts from "./filterProdocts";
import ProductsView from "./productsView";

const AppInventory = () => {
  const {categories}=useSelector(state=>state.categories)
  const {errorAddProduct}=useSelector(state=>state.products)
  useEffect(()=>{
    if(categories.length){
        localStorage.setItem("categories",JSON.stringify(categories))
    }
 },[categories])
 const showError=()=>{
 if(errorAddProduct){
  return toast.error(errorAddProduct)
 }
 }
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {showError()}
      <CategoryForm />
      <ProductForm/>
      <FilrerProducts/>
      <ProductsView/>
    </div>
  );
};

export default AppInventory;
