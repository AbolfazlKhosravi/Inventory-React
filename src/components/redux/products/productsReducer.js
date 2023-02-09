import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "./ProductsType";

const initialState = {
  products: [],
  errorAddProduct: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product] };
    case ADD_PRODUCT_ERROR:
      console.log(action.error);
      return { ...state, errorAddProduct: action.error };
    default:
      return state;
  }
};
export default productReducer;
