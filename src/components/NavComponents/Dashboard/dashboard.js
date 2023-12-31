import React, { useState } from "react";
import { useEffect } from "react";
import "./dashboardstyles.css";
import '../MasterProgram/Ckeckout.css'
import info from "../../../assets/info.svg";
import share from "../../../assets/share.svg";
import { useSelector, useDispatch } from "react-redux";
import { setTestData } from "../../../app/TestEnrolledSlice";
import axios from "axios";
import { setCourseData } from "../../../app/CourseEnrolled";
// import Footer from "../../Footer/Footer";
import Isloading from "../Loading/Isloading";
import HeaderNav from '../../../Temp/HeaderNav'
function Dashboard() {
  const dispatch = useDispatch();
  const Testdata = useSelector((state) => state.testenrolled.data);
  const Coursedata = useSelector((state) => state.course_enrolled.data);
  let [count, setCount] = useState(0);
  const [vdata,setVdata]=useState();
  useEffect(() => {
    async function fetchData() {
      try {
        let token=localStorage.getItem('token')
        const response = await axios.get(
          "https://mahesh-prepbytes-server.onrender.com/testEnrolled",{headers:{authorization:token}}
        );
        dispatch(setTestData(response.data));
        const response2 = await axios.get(
          "https://mahesh-prepbytes-server.onrender.com/courseEnrolled",{headers:{authorization:token}}
        );
        dispatch(setCourseData(response2.data));
        axios.get('https://mahesh-prepbytes-server.onrender.com/vedios').then((res)=>setVdata(res.data)) 
        
        // if(Coursedata){
        //   setCourseCount(Coursedata.length)
        // }
        // if(Testdata){
        //  setTestCount(Testdata.length)
        // }
      } catch (err) {
        console.log("error", err);
        // Handle error or dispatch an action to handle failure
      }
    }

    fetchData();
  }, [dispatch]);
  if(!vdata){
    return <Isloading/>
  }
  // console.log("course dataaa=======",Coursedata);
  

// if (!(Testdata&&Coursedata)) {
  //   return <Isloading/>; // You can modify the loading state accordingly
  // }
  
  return (
    <>
    <HeaderNav/>
      {/* <h1>Dashboard</h1> */}
      <div className="main-dash-container">
        <div className="left-dash-container">
          <span class="Profile_nav-list-icon">
            <svg 
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path>
            </svg>
            My Dashboard
          </span>
          {/* <p>My Profile</p> */}
        </div>
        <div className="right-dash-container">
          <div className="topbar">

          
            <b onClick={() => setCount(1)} className="course-test">
           { Coursedata&&Coursedata? <b>Courses:{Coursedata.length}/</b>:<b>Courses/</b>}
         </b>
          <b onClick={() => setCount(0)} className="course-test">
          {/* { Testdata&&Testdata? <b>Tests:{Testdata[0].tests.length}</b>:<b>Tests</b>} */}
          {Testdata&&Testdata?<b>Tests:{Testdata.length}</b>:<b>Tests</b>}
            </b>
          </div>

          {count ? (
            <div className="dash-course-container">
             
             {Coursedata && Array.isArray(Coursedata) ? (
            Coursedata.map((item, index) => (
              // render course data here...
              <div key={index} className="card-course">
              <div>
                <img className="courseImg" src={item.image} alt="not" />
              </div>
              <div className="right-course-container">
                <p style={{ color: "orange", fontSize: "larger" }}>
                  Rs{item.price}
                </p>
                <p className="coursetittle">{item.title}</p>
                <p className="description-course" style={{ color: "GrayText" }}>{item.description}</p>
              </div>
            </div>
            ))
          ) : (
            <p>You are not enrolled in any Courses</p>
          )}

            
            </div>
          ) : (
            <div className="card-container">
{Testdata&&Array.isArray(Testdata)? (
            Testdata.map((item, index) => (
              // render test data here...
              <div key={index} className="mock-card">
              <div className="info-share">
                <img src={info} alt="info" />
                <img src={share} alt="share" />
              </div>
              <div>
                <img className="card-image" src={item.image} alt="not" />
                <p className="tittle">{item.tittle}</p>
              </div>
             {item.date ?
              <div className="card-middle">
                <div>
                 {item.date ?<div><p>{item.date}</p>
                  <p>Date</p></div>:<div></div> } 
                </div>
                <div
                  style={{
                    borderRight: "2px solid #aac5eb",
                    borderLeft: "2px solid #aac5eb",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  <p>{item.participants}</p>
                  <p>Participants</p>
                </div>
                <div>
                  <p>{item.time}</p>
                  <p>duration</p>
                </div>
              </div>:<div></div>
             }
            </div>
            ))
          ) : (
            <p>You are not enrolled in any Tests</p>
          )}

            
            </div>
          )}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default Dashboard;
