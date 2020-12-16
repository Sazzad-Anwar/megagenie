//jshint esversion:10
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productCreateReducer, productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { userDeleteReducer, userDetailsReducer, userReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDeliverReducer, orderDetailsReducer, orderListMyReducer } from './reducers/orderReducers';
import { orderPayReducer } from './reducers/orderReducers';
import { userListReducer } from './reducers/userReducer';
import { userUpdateReducer } from './reducers/userReducer';
import { productDeleteReducer } from './reducers/productReducers';
import { productUpdateReducer } from './reducers/productReducers';
import { orderListReducer } from './reducers/orderReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productCreateReducer,
    cart: cartReducer,
    userLogin: userReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate:userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay :orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList:orderListReducer

});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethod = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
    cart:{ 
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethod
    },
    userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store; 