import React, { useEffect, useState } from "react";
import vedio_lib from "../../assets/video_lib_illustration.png";
import '../NavComponents/CSS/vedio.css'
import axios from "axios";
import Footer from "../Footer/Footer";
import Isloading from "./Loading/Isloading";
function Vediotutorial() {
    const [vdata,setVdata]=useState();
    useEffect (()=>{
        axios.get('https://mahesh-prepbytes-server.onrender.com/vedios').then((res)=>setVdata(res.data))
    },[])
    console.log("vdata",vdata);
    if(!vdata){
      return <Isloading/>
    }
  return (
    <>
      <div className="top-container">
        <div className="text-para">
          <p className="top-haeding">Prepbytes Video Library</p>
          <p >
            Increase your knowledge with PrepBytes free videos. PrepBytes video
            library is a repository of more than 250 videos containing videos on
            Competitive Programming , Language Fundamentals - C, C++, Java, Data
            Structures and Algorithms, Aptitude, Operating System, Interview
            Questions and much more all at one place.
          </p>
        </div>
        <div>
          <img className="vedio_lib" src={vedio_lib} alt="not" />
        </div>
      </div>
      <h1 className="heading-cat">CATEGORIES</h1>
      <div>
        <div className="vedio-container">
            {
                vdata&&vdata.map((item,index)=>(
                    <div key={index} className="vedio-card" >

                    <iframe src={item.url} title={item.tittle} allowfullscreen="" ></iframe>
                   
                 <b >{item.tittle}</b>
                 <p>{item.description}</p>
                         </div>
                ))
            }
           
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Vediotutorial;
