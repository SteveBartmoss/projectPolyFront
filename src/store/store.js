import { configureStore } from "@reduxjs/toolkit"
import timelineSlice from './timeline/timelineSlice'

export const store = configureStore({
    reducer: {
        timeline: timelineSlice
    }
})