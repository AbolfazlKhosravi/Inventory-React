import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCTS_FAILER,
  FETCH_PRODUCTS_LODING,
  FETCH_PRODUCTS_SUCCSES,
  FILTER_PRODUCT,
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
      const index = state.products.findIndex(
        (p) => parseInt(p.id) === parseInt(action.product.id)
      );
      const products = [...state.products];
      products[index] = action.product;
      return { ...state, products };
    case FILTER_PRODUCT:
      const serchFiltered = action.paylaod.products.filter((p) =>
        p.title
          .toLowerCase()
          .includes(action.paylaod.values.serch.toLowerCase().trim())
      );
      const sortFilter = serchFiltered.sort((a, b) => {
        if (action.paylaod.values.sort === "latest") {
          return new Date(a.createdAd) > new Date(b.createdAd) ? -1 : 1;
        }
        if (action.paylaod.values.sort === "earliest") {
          return new Date(a.createdAd) > new Date(b.createdAd) ? 1 : -1;
        }
        return 0
      });
      const categoryFilter = sortFilter.filter((p) => {
        if (action.paylaod.values.selectCategory === "") {
          return p;
        }
        return p.selectCategory === action.paylaod.values.selectCategory;
      });
      return { ...state, products: categoryFilter };
    default:
      return state;
  }
};
export default productReducer;
