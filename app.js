const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
app.use(express.json());
// const userRoutes = require('./routes/UserRoutes');
const studentRoutes = require('./routes/StudentRoutes.js');
const studentTypeRoutes = require('./routes/StudentTypeRoutes');
const examRoutes = require('./routes/ExamRoutes');
const studentExamBridgeRoutes = require('./routes/StudentExamBridgeRoutes');

// app.use('/user', userRoutes);
app.use('/student', studentRoutes);
app.use('/studentType', studentTypeRoutes);
app.use('/exam', examRoutes);
app.use('/studentExamBridge', studentExamBridgeRoutes);

mongoose.connect('mongodb+srv://admin:root@cluster0.zsrpnek.mongodb.net/?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('DB CONNECTED');
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT, ()=>{
    console.log('Server is running on port ${PORT}.');
})