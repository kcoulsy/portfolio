const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

//static folder
const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));

//body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('*', (req,res)=>{
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.post('/send',(req, res)=> {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
    <p>Name: ${req.body.name}</p>
    <p>Email: ${req.body.email}</p>
  <h3>Message</h3>
  <p>${req.body.message}</p>`;

  let transporter = nodemailer.createTransport({
      host: 'auth.smtp.1and1.co.uk',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'contact@kristiancoulson.co.uk',
          pass: 'B6%$8X"kK/s(gEK'
      }
  });

  let mailOptions = {
      from: '"Contact Form" <contact@kristiancoulson.co.uk>', // sender address
      to: 'kristian@coulsy.co.uk', // list of receivers
      subject: 'Personal Website Contact Form Submission', // Subject line
      text: 'Contact Form Submission', // plain text body
      html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
