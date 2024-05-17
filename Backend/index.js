import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import flightbookingsRoute from "./routes/flightbookings.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

//middleware
app.use(cookieParser())

app.use(express.json())


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/flightbookings", flightbookingsRoute);




app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errmorMessage = err.Message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errmorMessage,
    stack: err.stack
  })
})

app.get("/", (res, req) => {
  req.send("hello first request");
});

app.listen(port, () => {
  connect();
  console.log("Server is running on port ${port}");
});

// app.get("/api/flightdetails", (req, res) => {
//   fs.readFile(path.join(dirname, "flights.json"), "utf8", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading the data file");
//       return;
//     }
//     // if (req.query.search) {

//     // }
//     setTimeout(()=>{
//         res.send(JSON.parse(data));
//     },3000)
//   });
// });
