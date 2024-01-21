import { configureStore } from "@reduxjs/toolkit";
import MySlice from "../features/MySlice";

export const store = configureStore({
    reducer: {
        users: MySlice
        
    }
})

