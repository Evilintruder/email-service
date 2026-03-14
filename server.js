require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sendEmailRoute = require("./routes/sendEmail");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/send-email", sendEmailRoute);

app.listen(process.env.PORT, () => {

console.log("Email service running on", process.env.PORT);

});