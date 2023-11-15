import { createSlice } from '@reduxjs/toolkit';

const flagSlice = createSlice({
    name: 'flag',
    initialState: 0,
    reducers: {
        setFlag(state, action) {
            return action.payload;
        },
    },
});

export const { setFlag } = flagSlice.actions;
export default flagSlice.reducer;
