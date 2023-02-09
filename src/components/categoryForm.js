import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "./redux/category/categoryAction";

const CategoryForm = () => {
    const [show ,setShow]=useState(false);
    const [valuse,setValues]=useState({title:"",description:""});
    const dispatch=useDispatch()
    const changeHandler=({target:{value,name}})=>{
      setValues({...valuse,[name]:value})
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(valuse.title=="" || valuse.description==""){
           return alert('plese all write')
        }
        const category={...valuse,id:Date.now()}
        dispatch(addCategory({category}))
        setValues({title:"",description:""})
        setShow(false)
    }
    return ( 
      show ? <section className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[37rem]">
      <h2 className="text-white cursor-pointer ">Add New Category </h2>
       <form onSubmit={submitHandler} className="bg-gray-700 w-full text-gray-400 mt-3 rounded-md p-2">
          <div className="flex flex-col">
              <label>title</label>
              <input value={valuse.title} name="title" onChange={changeHandler} className="mt-2 w-36 rounded-md p-1 bg-gray-600 ring-1 ring-gray-400 focus:outline-blue-700 "/>
          </div>
          <div className="flex flex-col mt-3">
              <label>description</label>
              <textarea value={valuse.description} name="description" onChange={changeHandler} className="mt-2 w-full rounded-md p-1 bg-gray-600 ring-1 ring-gray-400  "/>
          </div>
          <div className="flex items-center justify-center mt-4 px-2 w-full gap-x-4">
              <button type="reset"  className="w-1/2  p-1 rounded-md ring-1 ring-gray-500" onClick={()=>setShow(false)}>cansel</button>
              <button type="submit" className="w-1/2  p-1 rounded-md bg-gray-500 text-white" >add category</button>
          </div>
      </form>
     </section>:
     <div className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[38rem]">
        <button className="text-white cursor-pointer " onClick={()=>setShow(true)}>Add New Category ?  click </button>
     </div>
     );
}
 
export default CategoryForm;