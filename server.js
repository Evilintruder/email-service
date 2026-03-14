require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sendEmailRoute = require("./routes/sendEmail");

const app = express();

app.use(cors({
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://morganticket.site"
  ]
}));
app.use(express.json());

app.use("/api/send-email", sendEmailRoute);

app.listen(process.env.PORT, () => {

console.log("Email service running on", process.env.PORT);

});
