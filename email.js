const nodemailer = require('nodemailer');
require('dotenv').config('./.env');

let registerMail = (email, username) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ktern@gmail.com',
            pass: 'triggeremail1234'
        }
    });
    let mailOptions = {
        from: 'ktern@gmail.com',
        to: email,
        subject: 'Welcome to Ktern Team',
        text: `Hi ${username}! You are successfully registered. `
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err);
        else console.log('Email sent successfully.');
    });
}

module.exports = {
    registerMail: registerMail
};