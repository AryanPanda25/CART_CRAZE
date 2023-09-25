const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const helmet = require("helmet")
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const errorMiddleware = require("./middleware/error");

// Config
dotenv.config({path:"./config/config.env"})

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors({
    origin: "https://cart-craze.vercel.app",
    credentials:true
}));

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;