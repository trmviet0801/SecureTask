import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

const authStore = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export type AuthStore = typeof authStore
export type AuthState = ReturnType<AuthStore['getState']>
export type AuthDispatch = AuthStore['dispatch']
export type AuthThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    AuthState,
    unknown,
    Action
>