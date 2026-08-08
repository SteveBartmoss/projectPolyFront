import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        addItem(state, action) {

            state.items.push(action.item)

        }
    }
})

export const {
    addItem,
} = timelineSlice.actions

export default timelineSlice.reducer