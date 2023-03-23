import { ActionTypes } from "../constants/actionTypes";


export const AddToCart = (product) => {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload:product,
    };
  };
export const DeleteToCart = (product) => {
   return {
      type:ActionTypes.DELETE_TO_CART,
     payload: product}
}

export const MinusQtyProduct = (product) => {
   return{type:ActionTypes.MINUS_QTY_PRODUCT
    , payload: product}
}
export const PlusQtyProduct = (product) => {
  return{type:ActionTypes.PLUS_QTY_PRODUCT
   , payload: product}
}
export const DeleteAllCart = () => {
  return {
     type:ActionTypes.CART_EMPTY,
    payload: ''}
}