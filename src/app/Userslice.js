// const axios=require('axios')
// import { CreateSlice,createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// export const register = createAsyncThunk('register', async (userData, { rejectWithValue }) => {
// try{
// const {data}=axios.post('http://localhost:9000/signup',userdata)
// }
// catch(err){
//     console.log("error",err);
// }
// })
// const UserReducer=createSlice({
//     name:"user",
//     initialState:{
//         userInfo:null,
//         errorMessage:'',
//         loading:false,
//         error:null
//     }
// })
// export default UserReducer.reducer