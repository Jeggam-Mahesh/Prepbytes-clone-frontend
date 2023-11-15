import { createSlice } from '@reduxjs/toolkit';

const Username = createSlice({
    name: 'username',
    initialState:localStorage.getItem('name') , // Initialize as null since no username is initially set
    reducers: {
        setUsername(state, action) {
            return action.payload;
        },
        clearUsername(state) {
            return null;
        },
    },
});

export const { setUsername, clearUsername } = Username.actions;
export default Username.reducer;
