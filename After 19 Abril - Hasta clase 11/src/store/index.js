import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice"
import reductorDelShop from "../features/Shop/shopSlice"
import globalReducer from "../features/Global/globalSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        shop: reductorDelShop,
        global: globalReducer
    }
})