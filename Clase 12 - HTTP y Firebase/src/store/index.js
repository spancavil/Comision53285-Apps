import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"
import cartReducer from "../features/Cart/cartSlice"
import reductorDelShop from "../features/Shop/shopSlice"
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop,
        cart: cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store