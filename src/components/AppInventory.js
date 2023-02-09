import { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryForm from "./categoryForm";

const AppInventory = () => {
  const {categories}=useSelector(state=>state.categories)
  useEffect(()=>{
    if(categories.length){
        localStorage.setItem("categories",JSON.stringify(categories))
    }
 },[categories])
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <CategoryForm />
    </div>
  );
};

export default AppInventory;
