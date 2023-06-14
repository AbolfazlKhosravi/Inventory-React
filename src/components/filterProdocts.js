import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsynFilterProducts } from "./redux/products/ProductsAction";

const FilrerProducts = () => {
   const {categories}=useSelector(state=>state.categories)
   const [values,setValues]=useState({serch:"",sort:"latest",selectCategory:""})
   const {products}=useSelector(state=>state.products)
   const dispatch =useDispatch()
   const dataLength = products ? products.length : 0;

    useEffect(()=>{
      dispatch(AsynFilterProducts(values))
    },[dataLength,dispatch,values])

   const changeHandler=({target:{value,name}})=>{
      setValues({...values,[name]:value})
      dispatch(AsynFilterProducts({...values,[name]:value}))
   }
    return ( 
        <section className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[37rem]">
           <div className="flex items-start justify-between w-full mt-2">
            <p className="text-gray-400  text-md">serch</p>
            <input onChange={changeHandler} name="serch" value={values.serch} className="text-gray-400 bg-gray-800 px-1 py-[.4rem] ring-1 ring-gray-600 rounded-lg"/>
           </div>
           <div className="flex items-start justify-between w-full mt-6">
            <p className="text-gray-400  text-md">sort</p>
            <select onChange={changeHandler}   name="sort" value={values.sort}   className="text-gray-400 rounded-lg w-36 px-1 py-[.4rem] bg-gray-800 ring-1 ring-gray-600  ">
                <option  value="latest">latest</option>
                <option  value="earliest ">earliest</option>
              </select>
           </div>
           <div className="flex items-start justify-between w-full mt-6">
            <p className="text-gray-400  text-md">category</p>
            <select onChange={changeHandler}   value={values.selectCategory}  name="selectCategory" className="text-gray-400 rounded-lg w-36 px-1 py-[.4rem] bg-gray-800 ring-1 ring-gray-600  ">
               <option  value="">all</option>
                 if(categories&&categories.length){
                   categories.map((c)=>{
                     return  <option key={c.id} value={c.id}>{c.title}</option>
                  })
                 }
              </select>
           </div>
        </section>
     );
}
 
export default FilrerProducts;