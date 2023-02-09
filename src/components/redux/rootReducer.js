import categoryReducer from "./category/categoryReducer";
import productReducer from "./products/productsReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
    categories:categoryReducer,
    products:productReducer
})
export default rootReducer