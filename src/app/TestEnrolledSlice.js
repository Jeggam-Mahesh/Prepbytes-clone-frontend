import { createSlice } from '@reduxjs/toolkit';

const TestSlice = createSlice({
    name: 'testenrolled',
    initialState: {
        data: null,
        // Initialize data as null or any default value you need
    },
    reducers: {
        setTestData(state, action) {
            state.data = action.payload;
        },
       
    },
});

export const { setTestData } = TestSlice.actions;
export default TestSlice.reducer;
