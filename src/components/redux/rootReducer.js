import categoryReducer from "./category/categoryReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
 category:categoryReducer
})
export default rootReducer