import React, { useEffect, useState } from 'react'
import '../MasterProgram/Ckeckout.css'
import axios from 'axios'
import Footer from '../../Footer/Footer';
import Isloading from '../Loading/Isloading';
import { useNavigate } from 'react-router-dom'
function Payment() {
    const navigate=useNavigate()
    const [data,setData]=useState()
    let price=0;
    useEffect(()=>{
       async function fetch(){
        axios.get('https://mahesh-prepbytes-server.onrender.com/getfullstack')
        .then((res)=>setData(res.data)).catch((err)=>console.log("error",err))
       }
       fetch()
    },[])
    // console.log("ite===================",data);
    async function displayRazorpay(item){
    let name=localStorage.getItem('name')
    let email=localStorage.getItem('email')
        let response=await axios.post("https://mahesh-prepbytes-server.onrender.com/checkout",{"amount":3000*100})
        let order_id=response.data.order.id
        console.log("orrder id",order_id);
          
      const options ={
        key:"rzp_test_FaT0o1O7SAaX6o", // Enter the Test API Key ID
        amount:price*100,// Amount is in currency subunits. Hence, 20 refers to 20
         currency:"INR",
         name:name,
         description:"Test transaction",
         order_id:order_id,
         handler:function(response){
        //   alert(response.razorpay_payment_id)
        //   alert(response.razorpay_order_id)
        //   alert(response.razorpay_signature)
          navigate('/fullstack')
          
          const paymentOption={
            razorpay_payment_id:response.razorpay_payment_id,
            razorpay_order_id:response.razorpay_order_id,
            razorpay_signature:response.razorpay_signature
          }
          axios.post("https://mahesh-prepbytes-server.onrender.com/paymentverification",paymentOption)
         },
        //  callback_url:"http://localhost:5000/paymentverification",
         prefill:{ 
          name:name,
          email:email, 
          contact:9998888345
         }
      }
      let rzp=new window.Razorpay(options); 
      rzp.open();
  
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(`https://mahesh-prepbytes-server.onrender.com/addtocourse`,item,{
          headers: { authorization:token }
        });
        // Handle success or error response from the server
        console.log(response.data.message); // Log success message or handle errors
      } catch (error) {
        // Handle errors from the server
        console.error("Error purchasing test:", error.response.data.message);
      }
  
       }
       if(!data){
        return <Isloading/>
       }
    return (
        <>
        <div className="container">
                <div className='mycart'>
                    <div className='center'><p className='number'>1</p><p className='bold'>mycart</p></div>
                    <b className='line'></b>
                    <div className='center'><p className='number'>2</p><p className='bold'>Checkout</p></div>
                    <b className='line'></b>
                    <div className='center'><p className='number'>3</p><p className='bold'>status</p></div>     
                    </div>
                </div>
                <p style={{fontSize:"larger", fontWeight:"bold"}}>My Cart</p>
                <div className='main-course-container'>
                {
            data&&data.map((item,index)=>(

                <div key={index} className='card-course'>
<div><img className='courseImg' src={item.image} alt='not'/></div>
<div className='right-course-container'>
    <p style={{color:"orange", fontSize:"larger"}}>Rs{item.price}</p><p className='coursetittle'>
{item.title}</p><p style={{color:"GrayText"}}>{item.description}</p></div>
         </div>
         
            )) 
        }
     
     <div className='payment'>
<p style={{fontSize:"larger", fontWeight:"bold"}}>Price Details</p>
<div className='flex'><p>Sub  Total:</p><p  style={{color:"orange", fontSize:"larger"}}>{data&&data[0].price}</p></div>
<div><div>
    <div><p style={{color:"orange", fontSize:"larger ", textAlign:"left"}}>Appy Coupon</p></div>
    <div className='flex'><p>Total Amount:</p><p>{data&&data[0].price}</p></div>
    <button onClick={()=>displayRazorpay(data)} className='payment-btn'>Make Payment</button></div></div>
     </div>
                </div>
                <Footer/>
        </>
    )
}

export default Payment
