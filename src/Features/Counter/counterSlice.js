import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 10,
  },
];


const countersSlice = createSlice({
    name : "counters",
    initialState,
    reducers : {
        increment : (state, action)=>{
            const updatedCounters = state.map(counter => {
                if(counter.id === action.payload){
                    counter.value ++
                }
            })



        },

        decrement : (state, action)=>{
            const updatedCounter = state.map(counter => {
                if(counter.id === action.payload){
                    counter.value --
                }
            })
        }
    }
})

export default countersSlice.reducer
export const {increment, decrement} = countersSlice.actions