import { configureStore } from "@reduxjs/toolkit";

import employeeReducer from './EmployeeSlice'
import UserReducer  from "./UserSlice";
var store = configureStore({
    reducer :{
        employees : employeeReducer,
        user : UserReducer

    },
})

store.subscribe(()=>localStorage.setItem("empdata",JSON.stringify(store.getState().employees.value)));

export default store;