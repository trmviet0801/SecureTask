import { createSlice, ThunkAction } from "@reduxjs/toolkit";

type authState = {
    isLogin: boolean
}

const initialState: authState = {
    isLogin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: state => {
            state.isLogin = true
        },
        logout: state => {
            state.isLogin = false
        }
    }
})

export const { login, logout } = authSlice.actions

