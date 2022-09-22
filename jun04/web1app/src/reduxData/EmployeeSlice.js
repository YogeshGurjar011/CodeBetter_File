import { createSlice } from '@reduxjs/toolkit';
// what is store ?, In which Form :(array, object ,integer)
export const employeeSlice = createSlice({
    name : 'employee',
    initialState :{
        value : [],
    },
    reducers : {
        loadEmpData : function(state,action){
            state.value = action.payload
        },
        changeEmpStatus : function(state,action){
          // action.payload.empid, action.payload.status
            state.value = state.value.map(ob=>ob.empid==action.payload.empid?{...ob,empstatus:action.payload.status}:ob)
        },
        addEmp : function(state,action)
        {
            state.value = [...state.value,action.payload]
        }
    },
})

export const {loadEmpData ,changeEmpStatus,addEmp} = employeeSlice.actions

export default employeeSlice.reducer;

