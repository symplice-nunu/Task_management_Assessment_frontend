import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasts: [],
    nextLink: '',
    prevLink: '',
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        getTasks: (state, { payload }) => {
            state.tasts = payload.tasks;
            state.nextLink = payload.next;
            state.prevLink = payload.previous;
        },
    }
});

export const { getTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
