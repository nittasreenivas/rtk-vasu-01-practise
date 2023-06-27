
import { configureStore } from "@reduxjs/toolkit";
import { fakeApi } from "../services/fakeApi";
import { dummyApi } from "../services/dummyApi";
import { setupListeners } from '@reduxjs/toolkit/query';
 import { employeesApi } from "../services/employeesApi";
 import { fooditemsApi } from "../services/fooditemsApi";
 import cartReducer from "../features/Cart/cartSlice";
import { authApi } from "../services/authApi";
import userReducer from "../features/User/userSlice"
const store = configureStore({
    reducer:{
        [fakeApi.reducerPath]: fakeApi.reducer,
        [dummyApi.reducerPath]: dummyApi.reducer,
        [ employeesApi.reducerPath]:  employeesApi.reducer,
        [ fooditemsApi.reducerPath]:  fooditemsApi.reducer,
        [ authApi.reducerPath]:  authApi.reducer,
        cart:cartReducer,
       user:userReducer
       
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(
        fakeApi.middleware,
        dummyApi.middleware,
        employeesApi.middleware,
        fooditemsApi.middleware,
        authApi.middleware,
        ),
    
})
setupListeners(store.dispatch)
export default store