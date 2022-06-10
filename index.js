const express=require('express');
const cookieParser = require('cookie-parser');
const app=express();
const port=8000;
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
const db = require('./config/mongoose');
app.use(cookieParser());
app.listen(port,(err)=>{
    if (err) {
        console.log('Error: ',err);
    }
    console.log(`Server running  on port: ${port}`);
}
);