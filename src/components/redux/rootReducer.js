import categoryReducer from "./category/categoryReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
    categories:categoryReducer
})
export default rootReducer