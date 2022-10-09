import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    username : "",
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser : (state, action) => {
            state.user = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        }
    }
})


export const {setUser, setUsername} = auth.actions
export default auth.reducer