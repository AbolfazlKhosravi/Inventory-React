import axios from "axios";
import {FILTER_PRODUCT, ADD_PRODUCT, ADD_PRODUCT_ERROR,FETCH_PRODUCTS_FAILER,FETCH_PRODUCTS_SUCCSES,FETCH_PRODUCTS_LODING,DELETE_PRODUCT, EDIT_PRODUCT } from "./ProductsType";

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
function filterproducts(paylaod){
  return{
      type:FILTER_PRODUCT,
      paylaod:paylaod
  }
}
export const AsyncAddProduct = (product) => {
  return function (dispatch) {
    axios
      .post("https://khosravi-react-inventory.glitch.me/products", product)
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
      .delete(`https://khosravi-react-inventory.glitch.me/products/${id}`)
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
      .put(`https://khosravi-react-inventory.glitch.me/products/${product.id}`,product)
      .then((res) => {
        dispatch(editProduct(res.data));
      })
      .catch((error) => {
      });
  };
};
export const AsynFilterProducts = (values) => {
  return function (dispatch) {
    axios
      .get(`https://khosravi-react-inventory.glitch.me/products`)
      .then((res) => {
        dispatch(filterproducts({products:res.data,values}));
      })
      .catch((error) => {
      });
  };
};
const fetchProducts=()=>{
  return function(dispatch){
      dispatch(productsLoding());
      axios.get("https://khosravi-react-inventory.glitch.me/products").then((res)=>{
       dispatch(productsSucces(res.data))
      }).catch((error)=>{
       dispatch(productsFiller(error.message))
      })
  }
}
export default fetchProducts;
