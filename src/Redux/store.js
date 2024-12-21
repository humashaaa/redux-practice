import { configureStore } from "@reduxjs/toolkit";
import countersSlice from './../Features/Counter/counterSlice';

const store = configureStore({
    reducer : {
        // reducer name : slice file name
        counters : countersSlice

    }
})

export default store;