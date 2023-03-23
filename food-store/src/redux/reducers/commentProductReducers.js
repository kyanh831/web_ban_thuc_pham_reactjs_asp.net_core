import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  comment: []
}

export const commentProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.COMMENT_PRODUCT:
      return { ...state,comments: payload };
    default:
      return state;
  }
}

export const reviewProductReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REVIEW_PRODUCT:
      return { ...state,reviews: payload };
    default:
      return state;
  }
}
