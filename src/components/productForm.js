import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncAddProduct,AsynEditProduct } from "./redux/products/ProductsAction";


const ProductForm = ({show,setShow}) => {
    const [valuse,setValues]=useState({title:show?show.product.title: "",quantity:show?show.product.quantity: "",selectCategory:show?show.product.selectCategory: ""});
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
        if(show){
            const updateProduct={...valuse,createdAd:new Date().toISOString(),id:show.product.id}
             dispatch(AsynEditProduct(updateProduct))
            setShow({ show: false, product: "" })
            return
        }
        dispatch(AsyncAddProduct(product))
        setValues({title:"",quantity:"",selectCategory:""})
    }
    return ( 
     <section className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[37rem]">
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
              <select onChange={changeHandler} value={valuse.selectCategory} name="selectCategory" className="cursor-pointer  mt-2 w-full rounded-md p-1 bg-gray-600 ring-1 ring-gray-400  ">
                <option value="" >select a Category</option>
                 {categories.map((c)=>{
                    return  <option  key={c.id} value={c.id}>{c.title}</option>
                 })}
              </select>
          </div>
          <div className="flex items-center justify-center mt-4  w-full gap-x-4">
            {show&&<button type="reset" className="w-full  p-[.4rem] rounded-md bg-gray-600 text-white" onClick={()=>setShow({ show: false, product: "" })} >cansel</button>}
              <button type="submit" className="w-full  p-[.4rem] rounded-md bg-gray-600 text-white" >{show?"UpdateProduct":"add new product"}</button>
          </div>
      </form>
     </section>
     );
}
export default ProductForm;