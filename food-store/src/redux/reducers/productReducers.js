import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  product: []
}

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}

export const optionsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OPTIONS:
      return { ...state, options: payload };
    default:
      return state;
  }
}

export const imgsReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_IMGS:
      return { ...state, imgs: payload };
    default:
      return state;
  }
}

export const categoryReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
}
export const productByCateReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_CATE:
      return { ...state, products: payload };
    default:
      return state;
  }
}

export const productNewReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_NEW:
      return { ...state, products: payload };
    default:
      return state;
  }
}

export const productSaleReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_SALE:
      return { ...state, products: payload };
    default:
      return state;
  }
}
export const productRecommendReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS_RECOMMEND:
      return { ...state, recommends: payload };
    default:
      return state;
  }
}
export const productDetailReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.PRODUCT_DETAIL:
      return { ...state,... payload };
    default:
      return state;
  }
}