import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config()
const PORT = process.env.PORT || 5000;

app.use(express.json())
// authRoute
app.use("/api/auth", authRoute);

app.use(cookieParser());

// message route
app.use("/api/messages", messageRoute);


//users route 
app.use("/api/users",userRoute);



// app.get("/",(req,res)=>{
//   res.send("hello jkhjjj");
//  })


app.listen(PORT,()=>{
  connectToMongoDB();
  console.log(`Server connected on PORT ${PORT}`);  
})
