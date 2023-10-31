const express =require('express');
const mongoose=require('mongoose');
const order =require('./models/orderDetails')
const cors =require('cors')
const app=express();
const bodyParser=require('body-parser')

mongoose.connect("mongodb+srv://22a95a0503:m8UN6AcVgAkEZeTt@cluster0.j7vzml3.mongodb.net/CoffeeShop?retryWrites=true&w=majority")
.then(console.log("DataBase connected"))
app.use(bodyParser.json())
app.use(cors()) 
app.use(express.json())
app.post("/orderDetails",(req,res,next)=>{
       
    const {name,email,phoneNo,date,time,item}=req.body;
   // console.log(req.body);
      let orderData;
    try{
        orderData=new order({
        name,email,phoneNo,date,time,item
       })
    }
     catch(err){return console.log(err);}
       orderData.save();
      
      return res.send(orderData);
})
app.get('/myorders',async (req,res,next)=>{
    const orderitems=await order.find();
    return res.status(200).json({orderitems})
})
app.delete('/deleteitem/:id',async(req,res,next)=>{
    const _id = req.params.id;
  
    let removeData;
    try{
       removeData = await order.findByIdAndDelete(_id);
    }catch(err){
        return console.log(err)
    }
    return res.send("delete success")
})
// app.post("/register",(req,res,next)=>{
//     const {name,email,phoneNo,password,confirmpassword}=req.body;
// })

app.listen('5000',()=>{
    console.log("Connected and listening to port 5000");
})