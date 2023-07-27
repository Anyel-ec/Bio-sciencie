const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/send-email', async (req, res) => {
    const { name, email, telefono, direccion, subject, message } = req.body;

    contentHTML = `
        <h1></h1>
        <ul>
            <li>Nombres: ${name}</li>
            <li>Email: ${email}</li>
            <li>Telefono: ${telefono}</li>
            <li>Direccion: ${direccion}</li>
            <li>Asunto: ${subject}</li>
        </ul>
        <p>${message}</p>
    `;
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.SECRETOCORREO,
            pass: process.env.SECRETOCONTRA
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    let info = await transporter.sendMail({
        from: '"ESPE LAB" <mejoramientogenetico2023@gmail.com>',
        to: 'rashel.duque.2020@gmail.com',
        subject: 'Formulario de Contacto',
        html: contentHTML
    });

    
    console.log('Message sent: %s', info.messageId);

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.redirect('/success.html');

    
});
module.exports = router;