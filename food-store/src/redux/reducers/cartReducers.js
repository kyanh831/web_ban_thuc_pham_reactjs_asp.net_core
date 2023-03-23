import { ActionTypes } from "../constants/actionTypes";


const initialState ={
    cartItems:[],
}


const cartReducers = (state= initialState,{type, payload}) => {
    switch (type) {
        case  ActionTypes.ADD_TO_CART: {
            let newList = [...state.cartItems]
            const exists = newList.find(item => item.MaThongTinSanPham === payload.MaThongTinSanPham)
            if (exists) {
                newList = newList.map((item) => item.MaThongTinSanPham === payload.MaThongTinSanPham ? { ...exists, qty: exists.qty + payload.qty } : item)
            }else{
                const product = {
                    ...payload
                }
                newList.push(product);
            }
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList,
            };
        }
            
        
        case  ActionTypes.MINUS_QTY_PRODUCT: {
            let newList = [...state.cartItems]
            const exists = newList.find(item => item.MaThongTinSanPham === payload.MaThongTinSanPham)
            if (exists.qty === 1) {
                newList = newList.filter((item) => item.MaThongTinSanPham !== exists.MaThongTinSanPham)
            }else{
                newList = newList.map((item) => item.MaThongTinSanPham === payload.MaThongTinSanPham ? { ...exists, qty: exists.qty - 1 } : item)
            }
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList,

            };
        }
        
        case  ActionTypes.PLUS_QTY_PRODUCT: {
            let newList = [...state.cartItems]
            const exists = newList.find(item => item.MaThongTinSanPham === payload.MaThongTinSanPham)

            newList = newList.map((item) => item.MaThongTinSanPham === payload.MaThongTinSanPham ? { ...exists, qty: exists.qty + 1 } : item)

            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList,

            };
        }
        
        case  ActionTypes.DELETE_TO_CART: {
            let newList = [...state.cartItems]
            
            newList = newList.filter((item) => item.MaThongTinSanPham !== payload.MaThongTinSanPham)
            
            localStorage.setItem('cartItems', JSON.stringify(newList))
            return {
                ...state,
                cartItems: newList
            };
        }

        case  ActionTypes.CART_EMPTY:{
            localStorage.setItem('cartItems', JSON.stringify([]))
            return {...state, cartItems: []}
        }
        default:
            return state;
    }
}


export default cartReducers