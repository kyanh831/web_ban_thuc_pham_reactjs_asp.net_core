import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload:products,
  };
};

export const setOptions = (options) => {
  return {
    type: ActionTypes.SET_OPTIONS,
    payload:options,
  };
};

export const setImgs = (imgs) => {
  return {
    type: ActionTypes.SET_IMGS,
    payload:imgs,
  };
};

export const setProductsByCate = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS_CATE,
    payload:products,
  };
};

export const setProductsNew = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS_NEW,
    payload:products,
  };
};

export const setProductsSale = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS_SALE,
    payload:products,
  };
};
export const setProductsRecommend = (recommends) => {
  return {
    type: ActionTypes.SET_PRODUCTS_RECOMMEND,
    payload:recommends,
  };
};
export const productDetail = (productDetail) => {
    return {
      type: ActionTypes.PRODUCT_DETAIL,
      payload:productDetail,
    };
  };
  export const setCategory = (category) => {
    return {
      type: ActionTypes.SET_CATEGORY,
      payload:category,
    };
  };
