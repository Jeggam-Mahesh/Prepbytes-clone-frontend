

import React, { useEffect } from "react";
import './CSS/mock.css';
import info from '../../assets/info.svg';
import share from "../../assets/share.svg";
import { useSelector, useDispatch } from "react-redux";
import { setMockData} from '../../app/MockSlice';
import {setTopicData } from '../../app/PractiseSlice'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import Footer from "../Footer/Footer";
// import loadinglogo from '../../assets/logo.webp'
import Isloading from "./Loading/Isloading";
function MockTest() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.mock.data);
    const Tdata = useSelector(state => state.topic.data);
    let logedin=useSelector(state=>state.name)
const  navigate=useNavigate();
let price=10;
    useEffect(() => {
        async function fetchData() { 
            try {
                const response = await axios.get('https://mahesh-prepbytes-server.onrender.com/mockdata');
                dispatch(setMockData(response.data.data));
                dispatch(setTopicData(response.data.topic_data));
               
            } catch (err) {
                console.log("error", err);
                // Handle error or dispatch an action to handle failure
            }
        }

        fetchData();
    }, [dispatch]);

    if (!data) {
      return <Isloading/>
        // return <div className="lazyloading"
       
        // ><img src={loadinglogo} alt="not"/></div>; // You can modify the loading state accordingly
    }

    console.log("data....", data);
    console.log("Topic data....", Tdata);
    async function displayRazorpay(item){
    if(!logedin){
      navigate('/login')
    }
    else{
      let email=localStorage.getItem('email')

      let response=await axios.post("https://mahesh-prepbytes-server.onrender.com/checkout",{"amount":(price-(price/10)+40)*100})
      let order_id=response.data.order.id
      console.log("orrder id",order_id);
        
    const options ={
      key:"rzp_test_FaT0o1O7SAaX6o", // Enter the Test API Key ID
      amount:price*100,// Amount is in currency subunits. Hence, 20 refers to 20
       currency:"INR",
       name:logedin,
       description:"Tesst transaction",
       order_id:order_id,
       handler:function(response){
        // alert(response.razorpay_payment_id)
        // alert(response.razorpay_order_id)
        // alert(response.razorpay_signature)
        navigate('/')
        
        const paymentOption={
          razorpay_payment_id:response.razorpay_payment_id,
          razorpay_order_id:response.razorpay_order_id,
          razorpay_signature:response.razorpay_signature
        }
        axios.post("http://localhost:9000/paymentverification",paymentOption)
       },
      //  callback_url:"http://localhost:5000/paymentverification",
       prefill:{ 
        name:logedin,
        email:email, 
        contact:9345559959 
       }
    }
    let rzp=new window.Razorpay(options); 
    rzp.open();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`https://mahesh-prepbytes-server.onrender.com/addtocart`,item,{
        headers: { authorization:token }
      });
      // Handle success or error response from the server
      console.log(response.data.message); // Log success message or handle errors
    } catch (error) {
      // Handle errors from the server
      console.error("Error purchasing test:", error.response.data.message);
    }

    }
     
     }
    return (
        // Your JSX using the fetched data
            <>
           
      <div className="mocktest">
        <h1>Mock Tests</h1>
        <p className="mock-para">
          Technical and Aptitude Test is a very important process of most of the
          placement tests. Crack your next placement with series of PrepBytes
          practice and mock tests. Practice subject-wise and company-wise tests.
          Take real-time mock tests with other students and test your
          preparation.
        </p>
      </div>
      <p className="featured">FEATURED MOCK TESTS</p>
      <div className="sub-heading"><b className="underline"></b><p className="text">Past Mock Tests</p><b className="underline"></b></div>
      <div className="past-mock">
        {
          data&&data.map((item,index)=>(
            <div key={index} className="mock-card">
            <div className="info-share">
              <img src={info} alt="info" />
              <img src={share} alt="share" />
            </div>
            <div>
              <img className="card-image" src={item.image} alt="not"/>
              <p className="tittle">{item.tittle}</p>
            </div>
            <div className="card-middle">
              <div ><p>{item.date}</p><p>Date</p></div>
              <div
               style={{borderRight:"2px solid #aac5eb", borderLeft:"2px solid #aac5eb", paddingLeft:"20px", paddingRight:"20px"}}>
                <p>{item.participants}</p><p>Participants</p></div>
              <div><p>{item.time}</p><p>duration</p></div>
            </div>
            <button onClick={() => displayRazorpay(item)} className="buynow">Buy now</button>
          </div>
          ))
        }
      </div>
<div>
  <p className="featured">Practice Tests</p>
  <div className="sub-heading"><b className="underline"></b><p className="text">Topic Wise</p><b className="underline"></b></div>
  <div className="past-mock">
        {
          Tdata&&Tdata.map((item,index)=>(
            <div key={index} className="mock-card">
            <div className="info-share">
              <img src={info} alt="info" />
              <img src={share} alt="share" />
            </div>
            <div>
              <img className="card-image" src={item.image} alt="not"/>
              <p className="tittle">{item.tittle}</p>
            </div>
            
            <button onClick={() => displayRazorpay(item)} className="buynow">Buy now</button>
          </div>
          ))
        }
      </div>
</div>
<Footer/>
    </>
    );
}

export default MockTest;
