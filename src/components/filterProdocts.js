const FilrerProducts = () => {
    return ( 
        <section className="flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[37rem]">
           <div className="flex items-start justify-between w-full mt-2">
            <p className="text-gray-400  text-md">serch</p>
            <input className="text-gray-400 bg-gray-800 px-1 py-[.4rem] ring-1 ring-gray-600 rounded-lg"/>
           </div>
           <div className="flex items-start justify-between w-full mt-6">
            <p className="text-gray-400  text-md">sort</p>
            <select   name="selectCategory" className="text-gray-400 rounded-lg w-36 px-1 py-[.4rem] bg-gray-800 ring-1 ring-gray-600  ">
                <option  value="">latest</option>
                 {/* {categories.map((c)=>{
                    return  <option key={c.id} value={c.id}>{c.title}</option>
                 })} */}
              </select>
           </div>
           <div className="flex items-start justify-between w-full mt-6">
            <p className="text-gray-400  text-md">category</p>
            <select   name="selectCategory" className="text-gray-400 rounded-lg w-36 px-1 py-[.4rem] bg-gray-800 ring-1 ring-gray-600  ">
                <option  value="">all</option>
                 {/* {categories.map((c)=>{
                    return  <option key={c.id} value={c.id}>{c.title}</option>
                 })} */}
              </select>
           </div>

        </section>
     );
}
 
export default FilrerProducts;