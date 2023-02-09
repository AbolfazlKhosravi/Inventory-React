import { useSelector } from "react-redux";

const Navbar = () => {
  const {products}=useSelector(state=>state.products)
  return (
    <header className="flex w-full justify-center items-center p-4 text-white font-bold  bg-gray-700">
      <h1>Inventoru App using Redux & React </h1>
      <div className="ml-2 bg-gray-600 w-5 h-5 flex justify-center items-center rounded-full ring-2 ring-white">
        <span className="text-sm">{products.length}</span>
      </div>
    </header>
  );
};

export default Navbar;
