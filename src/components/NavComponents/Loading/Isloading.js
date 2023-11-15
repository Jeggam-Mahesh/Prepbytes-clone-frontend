
import React from 'react'
import '../CSS/isloading.css'
import loadinglogo from '../../../assets/logo.webp'
import HeaderNav from '../../../Temp/HeaderNav'
function Isloading() {
    return (
        <>
        <HeaderNav/>
        <div style={{ height:"200px"}} >
    <img className="lazyloading" src={loadinglogo} alt="not"/></div>
        </>
    )
}

export default Isloading


