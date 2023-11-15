import { createSlice } from '@reduxjs/toolkit';

const MockSlice = createSlice({
    name: 'topic',
    initialState: {
        data: null,
         // Initialize data as null or any default value you need
    },
    reducers: {
        setTopicData(state, action) {
            state.data = action.payload;
        },
    },
});

export const {setTopicData } = MockSlice.actions;
export default MockSlice.reducer;
