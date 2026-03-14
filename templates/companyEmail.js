function companyEmail({ message, buttonLink }) {

return `

<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial">

<table width="100%" cellpadding="0" cellspacing="0">

<tr>
<td align="center">

<table width="600" style="background:#ffffff;border-radius:8px;overflow:hidden">

<!-- HEADER -->
<tr>
<td style="background:#0a0a0a;padding:20px;text-align:center">

<img src="https://morganticket.site/assets/hero.jpg" alt="Morgan Wallen Tickets"
style="height:50px"/>

</td>
</tr>

<!-- CONTENT -->

<tr>
<td style="padding:40px">

<h2 style="margin-top:0;color:#111">
Morgan Wallen Official Ticket Platform
</h2>

<p style="font-size:16px;color:#444;line-height:1.6">

${message}

</p>

${
buttonLink
?
`
<div style="margin-top:30px">

<a href="${buttonLink}"

style="
background:#FFD700;
padding:14px 24px;
text-decoration:none;
color:#000;
font-weight:bold;
border-radius:6px;
display:inline-block;
">

View Details

</a>

</div>
`
:
""
}

</td>
</tr>

<!-- FOOTER -->

<tr>
<td style="background:#111;padding:20px;text-align:center">

<p style="color:#aaa;font-size:12px;margin:0">

© ${new Date().getFullYear()} Morgan Wallen Ticket Platform  
All Rights Reserved

</p>

</td>
</tr>

</table>

</td>
</tr>

</table>

</body>
</html>

`;

}

module.exports = companyEmail;