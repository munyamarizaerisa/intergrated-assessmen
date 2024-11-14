const express = require ('express')
const app= express();
const port =3000;
app.get('/',(req,res)=>{
res.status(200).json({messages:'this is our integration for using get'})
});
app.post('/',(res,req)=>{
    req.status(200).json({messages:'this is our integretion for usig post'})
});
app.listen(port,()=>{
    console.log(`server is running at localhost: ${port}`)
});