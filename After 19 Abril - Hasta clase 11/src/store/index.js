import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"
import reductorDelShop from "../features/Shop/shopSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop
    }
})