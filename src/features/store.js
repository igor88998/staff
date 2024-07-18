import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import { apiSlice } from "./api/api.slice";
import userSlice from "./user/user.slice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleWare) => getMiddleWare().concat(apiSlice.middleware),
    devTools: true
})