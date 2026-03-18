// routes/sendEmail.js
const express = require("express");
const router = express.Router();

const sgMail = require("../mailer");
const companyEmail = require("../templates/companyEmail");

router.post("/", async (req,res)=>{

const {
customerEmail,
subject,
message,
buttonLink,
secret
} = req.body;


if(secret !== process.env.ADMIN_SECRET){

return res.status(403).json({error:"Unauthorized"});

}

try{

const html = companyEmail({
message,
buttonLink
});

await sgMail.send({
  from: `"Morgan Ticket" <tickets@morganticket.site>`,
  to: customerEmail,
  cc: process.env.ADMIN_COPY_EMAIL,
  subject: subject,
  html: html
});

res.json({success:true});

}

catch(err){

console.error(err);

res.status(500).json({error:"Email failed"});

}

});

module.exports = router;