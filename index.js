const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer')

const app = express()
require('dotenv').config()

//Middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(cors({ origin: "*" }));

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact-form.html')
})

app.post('/contact', (req, res) => {
    console.log("FRONTEND DATA REACHED")

    const {name, email, subject, msg} = req.body
    
    const transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    })

    const mailOption = {
        from: email,
        to: 'nadeembinnoushad12@gmail.com',
        subject: `Message from ${email}: ${subject}`,
        text: msg
    }

    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log('User info: ', info)
            res.redirect('/')
        }
    })
})

//PORT
const PORT = 8000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))