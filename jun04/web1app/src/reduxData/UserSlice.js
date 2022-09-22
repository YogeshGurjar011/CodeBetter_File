import { createSlice } from '@reduxjs/toolkit';
// what is store ?, In which Form :(array, object ,integer)
export const userSlice = createSlice({
    name : 'user',
    initialState :{
        value : {
            loginstatus :false,
            username: undefined
        },
    },
    reducers : {
        setUserData : function(state,action){
            state.value = action.payload
        }
       
    },
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer;

