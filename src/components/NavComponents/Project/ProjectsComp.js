import React, { useEffect, useState } from 'react'
import './Project.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Isloading from '../Loading/Isloading'
function ProjectsComp() {
    
    const displayProject=useLocation().state.index
console.log("display project=====",displayProject);
    let [data,setData]=useState()
    const [type,setType]=useState(displayProject);
    useEffect(()=>{
       let response= axios.get('https://mahesh-prepbytes-server.onrender.com/getProjects')
       .then((res)=>setData(res.data))
       console.log(response);
    },[])
    console.log("resopdccf====",data);
    if(!data){
        return <Isloading/>
    }
    return (
        <>
        <div>
            <h1 className="text-center">Projects</h1>
            <div className='project-buttons'>
            <button className='pbutton' onClick={() => setType('html')}>HTML</button>
            <button className='pbutton' onClick={() => setType('css')}>CSS</button>
            <button className='pbutton' onClick={() =>setType('javascript')}>JAVA SCRIPT</button>
            <button className='pbutton' onClick={() => setType('react')}>REACT</button>
            <button className='pbutton' onClick={() => setType('node')}>NODE</button>
            <button className='pbutton' onClick={() => setType('mongodb')}>MONGO DB</button>
            
                    </div>
           <div className='project-main'>
            
                <div className='project-left'>
                   
                    {
                        data &&  data.filter((item)=>item.category===type).map((item,index) => (
                             <div key={index}>
                               
                                <h2 style={{color:"orange", borderBottom:"1px solid rgb(221, 220, 220)"}}>{item.title}</h2>
                                <img className='project-img' src={item.image} alt='not'/>
                           
                                <p>{item.description}</p>
                             </div>))
                    }
                    <div id='jj' >
                     <h2 className='javascript' style={{color:"orange", borderBottom:"1px solid rgb(221, 220, 220)"}} >Todo App</h2>
                     <img className='javascript project-img'  src="https://res.cloudinary.com/dfbp64xxb/image/upload/v1698486916/prepbytes%20clone/gpwxbkhwqrwctwc2vwpv.png" alt='not'/>
                     <p className='javascript'> This comprehensive todo web app project serves as a testament to my proficiency in JavaScript. Through this project, I showcased my ability to establish seamless communication between HTML and JavaScript, leveraging the power of event listeners and DOM manipulation to enhance user interactivity. By implementing a range of DOM functions and handling user input dynamically, I transformed a static web application into a dynamic platform capable of performing various operations based on user interactions.</p>
                    </div>
                  
                </div>
                <div className='project-right'>
                    <h3>Topics:</h3>
                  {
                    data&&data.filter((item)=>item.category===type).map((item,index)=>(
                        
                            item.contents.map((item,index)=>(
                                <p className='topic'>{item}</p>
                            ))
                        
                      
                    ))
                  }
                      
                        
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default ProjectsComp
