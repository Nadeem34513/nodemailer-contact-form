const express = require('express');

const app = express()

//Middlewares
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact-form.html')
})

//PORT
const PORT = 8000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))