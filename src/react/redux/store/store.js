import { configureStore } from '@reduxjs/toolkit'
import headerSlice from "../reducers/headerSlice";

export default configureStore({
    reducer: {
        header: headerSlice
    },
})
