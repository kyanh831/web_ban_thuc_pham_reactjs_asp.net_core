import { ActionTypes } from "../constants/actionTypes";

export const setTransactions = (transaction) => {
  return {
    type: ActionTypes.SET_TRANSACTIONS,
    payload:transaction,
  };
};

export const transactionDetail = (transactionDetail) => {
    return {
      type: ActionTypes.TRANSACTION_DETAIL,
      payload:transactionDetail,
    };
  };

