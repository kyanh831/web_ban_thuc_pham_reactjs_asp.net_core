import {combineReducers} from 'redux'
import cartReducers from './cartReducers';
import { commentProductReducers, reviewProductReducers } from './commentProductReducers';
import { productReducers,productDetailReducers, productByCateReducers, productNewReducers, productSaleReducers, categoryReducers, optionsReducers, imgsReducers, productRecommendReducers } from './productReducers'
import { transactionReducers, transactionsDetailReducers } from './transactionReducers';
import { UserLoginReducer, userReducers, usersReducers } from './userReducers';

const reducers = combineReducers({
    allProducts: productReducers,
    allUsers: usersReducers,
    userDetail: userReducers,
    allOptions: optionsReducers,
    allImgs: imgsReducers,
    allCategory: categoryReducers,
    allProductsByCate: productByCateReducers,
    allProductsNew: productNewReducers,
    allProductsSale: productSaleReducers,
    allTransactions: transactionReducers,
    transactionDetail: transactionsDetailReducers,
    productDetail:productDetailReducers,
    allCart: cartReducers,
    allComment:commentProductReducers,
    allReview:reviewProductReducers,
    getUser:UserLoginReducer,
    recommends:productRecommendReducers,
});

export default reducers;