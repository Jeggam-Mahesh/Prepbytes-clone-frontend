
import React from 'react'
import '../CSS/isloading.css'
import loadinglogo from '../../../assets/logo.webp'
function Isloading() {
    return (
        <>
        <div style={{ height:"200px"}} >
    <img className="lazyloading" src={loadinglogo} alt="not"/></div>
        </>
    )
}

export default Isloading


