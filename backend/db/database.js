const mongoose = require("mongoose");
const DATABASE = process.env.DATABASE;
mongoose.connect(DATABASE,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true})
.then(()=>{console.log("connection successful with database!!!")})
.catch((err)=>{console.log(err)});
