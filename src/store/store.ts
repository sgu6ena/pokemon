import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {arealAPI} from "../api/admin/areals/ArealService";

const rootReducer = combineReducers({
    [arealAPI.reducerPath]: arealAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(arealAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']