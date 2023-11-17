import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MockTest from '../components/NavComponents/MockTest'
import Vediotutorial from '../components/NavComponents/Vediotutorial'
import MasterPrograming from '../components/NavComponents/MasterProgram/MasterPrograming'
import FullStack from '../components/NavComponents/Fullstack/FullStack'
import Elevation from '../components/NavComponents/Elevation/Elevation'
import Home from '../components/NavComponents/Home/Home'
import SignInRegComp from '../components/Login_sign/SignInRegComp'
import Dashboard from '../components/NavComponents/Dashboard/dashboard'
import Checkout from '../components/NavComponents/MasterProgram/Checkout'
import Payment from '../components/NavComponents/Fullstack/Payment'
import ProjectsComp from '../components/NavComponents/Project/ProjectsComp'
import  ForgetPassword  from '../components/Login_sign/ForgetPassword'
import ChangePassword from '../components/Login_sign/ChangePassword'
function RouteComp() {
    return (
        <>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mock-tests' element={<MockTest/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/project' element={<ProjectsComp/>}/>
    <Route path='/preparation-videos' element={<Vediotutorial/>}/>
    <Route path='/master-competitive-program' element={<MasterPrograming/>}/>
    <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack/>}/>
    <Route path='/elevation-academy' element={<Elevation/>}/>
    <Route path='/login' element={<SignInRegComp/>}/>
    <Route path='/register' element={<SignInRegComp/>}/>
    <Route path='/forgotpassword' element={<ForgetPassword/>}/>
    <Route path='/changepassword' element={<ChangePassword/>}/>
    <Route path='#' element={<ChangePassword/>}/>
 </Routes>

        </>
    )
}

export default RouteComp
