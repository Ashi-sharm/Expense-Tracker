import express from  'express';
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
import cors from 'cors';

// require('dotenv').config()

mongoose
.connect("mongodb+srv://1821sharmaashi:9qLyeXSi!QrUAKV@cluster0.bhqtrem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
     console.log('MongoDb is connected')
})
.catch(err => {
    console.log(err);
});
const app = express();
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internet Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });

});





