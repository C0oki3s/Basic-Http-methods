const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//static folder
app.use(express.static(path.join(__dirname,'public')));
//members api routes
app.use('/api/members', require('./routes/api/members'))

app.listen(4444,()=>{
    console.log("started")
})