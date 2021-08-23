import { combineReducers } from "redux";
 const todoListReducer = (intial = null, action)=>{console.log(action)
     if(action.type == 'ADD')
        return intial ? [...intial, action.peyload]: [action.peyload]
    return intial

 }
export default combineReducers({
    list: todoListReducer
});