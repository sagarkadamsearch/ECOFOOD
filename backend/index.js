const cors = require('cors');
const express = require('express');
const {UserRoute} = require('./Routes/userRoute');
const { connection } = require('./db');
const { productRoute } = require('./Routes/productsRoute');
const app = express();
const  port = 4000;


app.use(cors());
app.use(express.json());
app.use('/users',UserRoute);
app.use('/products',productRoute);


app.listen(port,async()=>{
    try {
        await connection;
        console.log(`Server is running at ${port}`);
        console.log('DataBase Connected');
    } catch (error) {
        console.log({"Error":error});
    }
})