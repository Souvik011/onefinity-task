import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./FormSlice";
const store = configureStore({
    reducer:{form:FormSlice}
});

export default store;