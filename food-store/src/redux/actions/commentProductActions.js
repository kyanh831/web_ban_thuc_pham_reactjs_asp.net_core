import { ActionTypes } from "../constants/actionTypes";

export const setCommentProduct = (comments) => {
  return {
    type: ActionTypes.COMMENT_PRODUCT,
    payload:comments,
  };
};

export const setReviewProduct = (reviews) => {
  return {
    type: ActionTypes.REVIEW_PRODUCT,
    payload:reviews,
  };
};
