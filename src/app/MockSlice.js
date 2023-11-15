import { createSlice } from '@reduxjs/toolkit';

const MockSlice = createSlice({
    name: 'mock',
    initialState: {
        data: null,
        // Initialize data as null or any default value you need
    },
    reducers: {
        setMockData(state, action) {
            state.data = action.payload;
        },
       
    },
});

export const { setMockData } = MockSlice.actions;
export default MockSlice.reducer;
