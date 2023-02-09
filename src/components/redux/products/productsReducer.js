import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCTS_FAILER,
  FETCH_PRODUCTS_LODING,
  FETCH_PRODUCTS_SUCCSES,
} from "./ProductsType";

const initialState = {
  products: [],
  errorAddProduct: "",
  error: "",
  loding: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LODING:
      return { ...state, loding: true, products: [], error: "" };
    case FETCH_PRODUCTS_FAILER:
      return { loding: false, products: [], error: action.paylaod };
    case FETCH_PRODUCTS_SUCCSES:
      return { loding: false, error: "", products: action.paylaod };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
        errorAddProduct: "",
      };
    case ADD_PRODUCT_ERROR:
      return { ...state, errorAddProduct: action.error };
    case DELETE_PRODUCT:
      const filterdProducts = state.products.filter(
        (p) => p.id !== action.productId
      );
      return { ...state, products: filterdProducts };
      case EDIT_PRODUCT:
       const index=state.products.findIndex(p=>p.id==action.product.id)
      const products=[...state.products]
      products[index]=action.product
      return { ...state, products };
    default:
      return state;
  }
};
export default productReducer;
