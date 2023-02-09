import { ADD_CATEGORY } from "./categoryType";

export function addCategory(payload) {
    return{
        type:ADD_CATEGORY,
        category:payload.category
    }
}