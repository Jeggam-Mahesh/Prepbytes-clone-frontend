
import "./mcp-syllabus.css"
import React, { useState } from "react";
const MCPCurriculum = () => {
    const [togle, setTogle] =useState(false)
    const [togle2, setTogle2] =useState(false)
    const clickHandler1 =()=>{
        setTogle(false);
        setTogle2(true);
    }
    const clickHandler2 =()=>{ 
        setTogle(false);
        setTogle2(false);
    }
  return (
  <>
 
     <div className="main-curriculum-container">
     <div className="left-curriculium-container ">
        <div onClick={()=>setTogle(true)} className="left-inner-section">
            <img className="logo" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="c/c++/java"/>
            <div className={togle ?`leftTitle`:""}>Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
        </div>
        <div onClick={clickHandler1} className="left-inner-section">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon2.webp" alt="DSA"/>
            <div className={!togle &&togle2?`leftTitle`:""}>Data Structures and Algorithms</div>
        </div>
        <div onClick={clickHandler2} className="left-inner-section">
            <img className="logo" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Icon3.webp" alt="competitivemath"/>
            <div className={!togle && !togle2?`leftTitle`:""}>Competitive Maths</div>
        </div>
        <img className="leftImg" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Curriculum-Image.webp" alt="lftimg"/>
     </div>


        <div className="right-curriculum-container">

            {togle
            ?<ul>
            <li>C/C++/Java/Python Overview</li>
         
            <li>Logic Building</li>
           
            <li>Data Types</li>
          
            <li>Pattern Programming</li>
            
            <li>Operators and Expressions</li>
           
            <li>Input/Output</li>
           
            <li>Functions</li>
          
            <li>Functions and OOPs(Python)</li>
            
            <li>Pointers(C/C++)</li>
           
            <li>Arrays</li>
            
            <li>Structures</li>
            {/* <li className="empty"></li> */}
            {/* <li>Character Arrays and Strings</li>
            <li className="empty"></li>
            <li>Recursion</li>
            <li className="empty"></li> */}
            {/* <li>Bit Manipulation</li>
            <li className="empty"></li>
            <li>STLs(C++)</li>
            <li className="empty"></li>
            <li>Collections (Java)</li>
            <li className="empty"></li>
            <li>Set, List, Tuples, Dictionary(Python)</li> */}
            
        </ul>
            :!togle &&togle2
            ?<ul>
            <li>Linked List</li>
           
            <li>Stack</li>
            
            <li>Queues</li>
            
            <li>Trees</li>
            
            <li>Heaps</li>
            
            <li>Graphs</li>
           
            <li>Segment Tree</li>
            
            <li>Searching</li>
           
            <li>Sorting</li>
            
            <li>Hashing</li>
           
            <li>Intro to DS/Algo</li>
            {/* <li className="empty"></li> */}
            {/* <li>Time Complexity</li>
            <li className="empty"></li>
            <li>Back Tracking</li>
            <li className="empty"></li>
            <li>Divide & Conquer</li> */}
            {/* <li className="empty"></li> */}
            {/* <li>Greedy Algorithms</li>
            <li className="empty"></li>
            <li>Dynamic Programming</li>
            <li className="empty"></li>
            <li>String Matching Algorithms</li> */}
            
        </ul>
            :<ul>
            <li>Prime Numbers</li>
           
            <li>Permutation & Combinations</li>
            
            <li>GCD</li>
           
            <li>LCM</li>
          
            <li>Probabilities</li>
           
            <li>Number Theory</li>
          
            <li>Modular Arithmetic</li>
           
            <li>Binary Exponention</li>
           
            <li>Matrix Exponentiation</li>
            
            <li>Game Theory</li>
            {/* <li className="empty"></li> */}
            <li>Computational Geometry</li>   
            
        </ul>}

            
        </div>
        </div>
        </>
   
  );
};



export default MCPCurriculum;


