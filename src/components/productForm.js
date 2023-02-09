import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncAddCategory } from "./redux/products/ProductsAction";


const ProductForm = () => {
    const [valuse,setValues]=useState({title:"",quantity:"",selectCategory:""});
    const dispatch=useDispatch()
    const {categories}=useSelector(state=>state.categories)
  
    const changeHandler=({target:{value,name}})=>{
      setValues({...valuse,[name]:value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(valuse.title=="" || valuse.quantity==""|| valuse.selectCategory==""){
           return alert('plese all write')
        }
        const product={...valuse,createdAd:new Date().toISOString()}
        dispatch(AsyncAddCategory(product))
        setValues({title:"",quantity:"",selectCategory:""})
    }
    return ( 
     <section className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[38rem]">
       <form onSubmit={submitHandler} className="bg-gray-700 w-full text-gray-400 mt-3 rounded-md p-2">
          <div className="flex flex-col">
              <label>title</label>
              <input value={valuse.title} name="title" onChange={changeHandler} className="mt-2 w-36 rounded-md p-1 bg-gray-600 ring-1 ring-gray-400 focus:outline-blue-700 "/>
          </div>
          <div className="flex flex-col">
              <label>quantity</label>
              <input type="number" value={valuse.quantity} name="quantity" onChange={changeHandler} className="mt-2 w-36 rounded-md p-1 bg-gray-600 ring-1 ring-gray-400 focus:outline-blue-700 "/>
          </div> 
          <div className="flex flex-col mt-3">
              <select onChange={changeHandler} value={valuse.selectCategory} name="selectCategory" className="mt-2 w-full rounded-md p-1 bg-gray-600 ring-1 ring-gray-400  ">
                <option value="">select a Category</option>
                 {categories.map((c)=>{
                    return  <option key={c.id} value={c.id}>{c.title}</option>
                 })}
              </select>
          </div>
          <div className="flex items-center justify-center mt-4  w-full gap-x-4">
              <button type="submit" className="w-full  p-[.4rem] rounded-md bg-gray-600 text-white" >add new product</button>
          </div>
      </form>
     </section>
     );
}
export default ProductForm;