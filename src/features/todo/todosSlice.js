import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
}
export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        add(state){
            state.count += 1;
        },
        minus(state){
            state.count -= 1;
        },
        reset(state){
            state.count = 0;
        }
    }
})

export const { add, minus, reset } = todosSlice.actions
export default todosSlice.reducer