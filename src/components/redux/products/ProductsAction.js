import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_ERROR } from "./ProductsType";

function addCategory(payload) {
  return {
    type: ADD_PRODUCT,
    product: payload,
  };
}
function addCategoryError(payload) {
  return {
    type: ADD_PRODUCT_ERROR,
    error: payload,
  };
}
export const AsyncAddCategory = (product) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/products", product)
      .then((res) => {
        dispatch(addCategory(res.data));
      })
      .catch((error) => {
        dispatch(addCategoryError(error.message));
      });
  };
};
