const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '**************',
       pass: '**************',
    }
});

const message = {
    from: 'santa@gmail.com',
    to: 'to@email.com',
    subject: 'HO HO HO',
    html: '<h1>Happy new year!</p>',
    attachments: [
        { // Use a URL as an attachment
          filename: 'index.html',
          path: './index.html'
      }
    ]
};


transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});