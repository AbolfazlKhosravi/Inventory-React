import axios from "axios";
import { ADD_PRODUCT, ADD_PRODUCT_ERROR,FETCH_PRODUCTS_FAILER,FETCH_PRODUCTS_SUCCSES,FETCH_PRODUCTS_LODING,DELETE_PRODUCT, EDIT_PRODUCT } from "./ProductsType";

function productsLoding(){
    return{
        type:FETCH_PRODUCTS_LODING
    }
}
function productsSucces(products){
    return{
        type:FETCH_PRODUCTS_SUCCSES,
        paylaod:products
    }
}
function productsFiller(error){
    return{
        type:FETCH_PRODUCTS_FAILER,
        paylaod:error
    }
}
function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    product: payload,
  };
}
function deleteProduct(id) {
  return {
    type: DELETE_PRODUCT,
    productId: id,
  };
}
function editProduct(payload) {
  return {
    type: EDIT_PRODUCT,
    product: payload,
  };
}
function addProductError(payload) {
  return {
    type: ADD_PRODUCT_ERROR,
    error: payload,
  };
}
export const AsyncAddProduct = (product) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/products", product)
      .then((res) => {
        dispatch(addProduct(res.data));
      })
      .catch((error) => {
        dispatch(addProductError(error.message));
      });
  };
};
export const AsynDeleteProduct = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then((res) => {
        dispatch(deleteProduct(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const AsynEditProduct = (product) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:3001/products/${product.id}`,product)
      .then((res) => {
        dispatch(editProduct(res.data));
      })
      .catch((error) => {
      });
  };
};
const fetchProducts=()=>{
  return function(dispatch){
      dispatch(productsLoding());
      axios.get("http://localhost:3001/products").then((res)=>{
       dispatch(productsSucces(res.data))
      }).catch((error)=>{
       dispatch(productsFiller(error.message))
      })
  }
}
export default fetchProducts;
