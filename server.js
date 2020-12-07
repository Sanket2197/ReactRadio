const express = require("express");
const connectDB = require('./config/db');

const app = express();

app.use(express.json())

connectDB();

app.use('/api/patient', require('./routes/api/patient'));


const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>console.log(`Server Started @ PORT ${PORT}`))