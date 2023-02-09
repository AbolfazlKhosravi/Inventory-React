import { ADD_CATEGORY } from "./categoryType";

const initialState={
  categories:JSON.parse(localStorage.getItem("categories"))||[]
}
const categoryReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ADD_CATEGORY:
        return {...state,categories:[...state.categories,action.category]}
    default:return state
  }
}
export default categoryReducer