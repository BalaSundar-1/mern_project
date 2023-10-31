// import React,{useState} from 'react'

// function Register() {
//     const [customerData,setCustomerData]=useState({
//         name:"",
//         email:"",
//         phoneNo:"",
//         password:"",
//         confirmpassword:"",
      
//     })
//     const handleChange=(e)=>{
//         setCustomerData({...customerData,[e.target.name]:e.target.value})
// }
//   return (
//    <> 
//     <form id="detail1" style={{marginLeft:"35%",marginTop:"10px"}} >
//           <b id="detail4">Name :</b><input type="text" name="name"id="detail3" value={customerData.name} onChange={handleChange} required/><br></br>
//          <b id="detail4"> email:</b><input type="email"id="detail3" value={customerData.email} name="email" onChange={handleChange} required/><br></br>
//          <b id="detail4"> Phoneno:</b><input type="tel"id="detail3" value={customerData.phoneNo} name="phoneNo" onChange={handleChange} required/><br></br>
//          <b id="detail4"> Password:</b><input type="password"id="detail3" value={customerData.password} name="date" onChange={handleChange} required/><br></br>
//          <b id="detail4">Confirm Password:</b><input type="password"id="detail3" value={customerData.confirmpassword} name="time" onChange={handleChange} required/><br></br>
//          <b id="detail5"></b><input type="submit"id="detail5"/><br></br>
//         </form>
//    </>
//   )
// // }

// export default Register