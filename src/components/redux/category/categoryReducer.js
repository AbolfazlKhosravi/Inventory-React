import { ADD_CATEGORY } from "./categoryType";

const initialState={
    category:[]
}
const categoryReducer=(state=initialState,action)=>{
  switch (action.type) {
    case ADD_CATEGORY:
        return {...state,categoryReducer:[...categoryReducer,action.category]}
    default:return state
        
  }
}
export default categoryReducer