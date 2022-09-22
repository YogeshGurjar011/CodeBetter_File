import { configureStore } from "@reduxjs/toolkit";
import UserReduser from "./UserSlice";

const store = configureStore({
    reducer: {
        user: UserReduser
    }
})

export default store;