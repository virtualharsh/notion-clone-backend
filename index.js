// npm i express cookie-parser 
const express = require('express');
const app = express();
const CookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const connectMongo = require('./db/connection');
const userRouter = require('./routes/userRouter')
const staticRouter = require('./routes/staticRouter')


dotenv.config()
const PORT = process.env.PORT || 8001;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/Task'

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(CookieParser());

connectMongo(DB_URL)

app.use('/', staticRouter)
app.use('/api/', userRouter)

app.listen(PORT,(e)=>{
    if (e) console.log(e);
    console.log(`Server started on http://localhost:${PORT}`);
    
});