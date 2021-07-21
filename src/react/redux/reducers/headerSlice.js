import { createSlice } from '@reduxjs/toolkit'

export const header = createSlice({
    name: 'header',
    initialState: {
        value: "Electron React Template",
    },
    reducers: {
        changeHeader: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { changeHeader } = header.actions

export default header.reducer
