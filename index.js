const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Prodectmodel.js')
const app=express();
const port=8080;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{
    res.send("first")
})

app.get('/home', (req,res)=>{
    res.send("Home page")
})
app.post('/api/products', async (req,res)=>{
    try{
       const product = await Product.create(req.body);
       res.status(200).json(product);

    }catch(error){
        res.status(500).json({message: error})
    }
});
mongoose.connect('mongodb+srv://rlrenjinililly:IZyXLrOLPcnlnLI9@samplenode.bpvbqyh.mongodb.net/?retryWrites=true&w=majority&appName=samplenode')
.then(()=>{
    console.log("connected to database")
})
.catch(()=>{
    console.log("connection failed")
})
app.listen(port, ()=>{
    console.log('server started, port',port);
})