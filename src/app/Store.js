import { configureStore } from "@reduxjs/toolkit"
import Userslice from "./Userslice"
import useFlag from './Flagslice'
import Username from "./Username"
import mockdata from './MockSlice'
import topicdata from './PractiseSlice'
import testdata from './TestEnrolledSlice'
import coursedata from "./CourseEnrolled"
export const store=configureStore({
    reducer:{
        user:Userslice,
        flag:useFlag,
        name:Username,
        mock:mockdata,
        topic:topicdata,
        testenrolled:testdata,
        course_enrolled:coursedata
    }
})