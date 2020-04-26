const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '1178f646e80af1',
       pass: '6a0172eecd9ab2'
    }
});

const message = {
    from: 'elonmusk@tesla.com',
    to: 'to@email.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
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