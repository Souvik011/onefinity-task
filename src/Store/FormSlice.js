import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:[]};

const FormSlice = createSlice ({
    name:"formSlice",
    initialState:initialState,
    reducers:{
        addData(state,action) {
            state.data = action.payload;
        }
    }
    
});

export const FormActions = FormSlice.actions;
export default FormSlice.reducer;