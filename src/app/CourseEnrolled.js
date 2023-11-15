import { createSlice } from '@reduxjs/toolkit';

const CourseSlice = createSlice({
    name: 'course_enrolled',
    initialState: {
        data: null,
        // Initialize data as null or any default value you need
    },
    reducers: {
        setCourseData(state, action) {
            state.data = action.payload;
        },
       
    },
});

export const { setCourseData } = CourseSlice.actions;
export default CourseSlice.reducer;
