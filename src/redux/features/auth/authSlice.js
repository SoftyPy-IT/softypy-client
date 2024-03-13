import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: null,
    token:null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setRegister:(state, action)=>{
            const { email, token } = action.payload
            state.email = email;
            state.token = token
        },
        setUser:(state, action)=>{
            console.log(action.payload)
            const { email, token } = action.payload
            state.email = email;
            state.token = token
        },
        logout: (state)=>{
            state.email= null;
            state.token = null
        },
        
    }

})

export const {setRegister, logout, setUser} = authSlice.actions

export default authSlice.reducer;


export const useCurrentToken = (state) => state.auth.token
console.log(useCurrentToken)
