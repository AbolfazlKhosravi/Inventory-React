import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductForm from "./productForm";
import fetchProducts from "./redux/products/ProductsAction";
import { AsynDeleteProduct } from "./redux/products/ProductsAction";
const ProductsView = () => {
  const [show, setShow] = useState({ show: false, product: "" });
  const { loding, error, products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const findCategory = (id) => {
    if (categories.length) {
      const category = categories.find((p) => p.id == id);
      return category.title;
    }
  };
  if (loding) return <div className="text-white  mt-6 "> loding</div>;
  if (error) return <div className="text-red-400 mt-6">{error}</div>;
  if (products && products.length == 0)
    return <div className="text-white mt-6 text-lg">Add a Product</div>;
  if (products)
    return show.show ? (
      < >
        <h2 className=" text-white text-lg left-0 relative">Edit Product</h2>{" "}
        <ProductForm show={show} setShow={setShow}/>
      </>
    ) : (
      <section className="mt-4  flex flex-col items-start justify-center container p-2 md:w-[35rem] xl:w-[37rem]">
        <h1 className="text-gray-200 text-[1.2rem] ">Products List</h1>
        <div className="flex flex-col items-start justify-center w-full overflow-x-auto pb-4">
          {products.map((p) => {
            return (
              <div
                key={p.id}
                className="flex w-full items-center justify-between mt-2"
              >
                <p className="text-gray-400 text-[1.1rem] pr-8">{p.title}</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-[.9rem] mr-3">
                    {new Date(p.createdAd).toLocaleDateString("en-US")}
                  </p>
                  <span className="text-gray-400 text-[.9rem] mr-3 px-2 py-[.1rem] ring-1 ring-gray-500 rounded-xl">
                    {findCategory(p.selectCategory)}
                  </span>
                  <button
                    className="text-gray-400 text-[.9rem] mr-3 px-2 py-[.1rem] ring-1 ring-gray-500 rounded-xl"
                    onClick={() => setShow({ show: true, product: p })}
                  >
                    Edit
                  </button>
                  <span className="text-gray-400 text-[.9rem] bg-gray-600 mr-3 w-6 h-6 flex items-center justify-center ring-2 ring-gray-500 rounded-full">
                    {p.quantity}
                  </span>
                  <button
                    className="mr-[.1rem] text-red-400 text-[.9rem]  px-2 py-[.1rem] ring-1 ring-red-400 rounded-xl"
                    onClick={() => dispatch(AsynDeleteProduct(p.id))}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
};

export default ProductsView;
