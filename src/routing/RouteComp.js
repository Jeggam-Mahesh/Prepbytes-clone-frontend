import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MockTest from '../components/NavComponents/MockTest'
import Vediotutorial from '../components/NavComponents/Vediotutorial'
import MasterPrograming from '../components/NavComponents/MasterPrograming'
import FullStack from '../components/NavComponents/FullStack'
import Elevation from '../components/NavComponents/Elevation'
import Home from '../components/NavComponents/Home/Home'

function RouteComp() {
    return (
        <>
 <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mocktest' element={<MockTest/>}/>
    <Route path='/vediotutorial' element={<Vediotutorial/>}/>
    <Route path='/masterprogram' element={<MasterPrograming/>}/>
    <Route path='/fullstack' element={<FullStack/>}/>
    <Route path='/elevation' element={<Elevation/>}/>

 </Routes>
        </>
    )
}

export default RouteComp
