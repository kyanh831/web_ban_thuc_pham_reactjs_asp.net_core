import { ActionTypes } from "../constants/actionTypes"

const initialState = {
  transaction: []
}

export const transactionReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TRANSACTIONS:
      return { ...state, transactions: payload };
    default:
      return state;
  }
}

export const transactionsDetailReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.TRANSACTION_DETAIL:
      return { ...state,... payload };
    default:
      return state;
  }
}