let express = require('express');
let app = express();
let bodyParser = require('body-parser')
let dotenv = require('dotenv').config()

console.log("Hello World")

app.use(bodyParser.urlencoded({extended: false}))


app.use('/', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})

app.get('/', (req, res) => res.sendFile(absolutePath))

app.use('/public', express.static('public'))

app.get('/json', (req, res) => {
    message = "Hello json"
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        message = message.toUpperCase();
    }
    res.json({"message": message})
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({"time": req.time})
})

app.get('/:word/echo', (req, res)=>{
    res.json({"echo": req.params.word})
})

app.get('/name', (req, res) => {
    res.json({ "name": `${req.query.first} ${req.query.last}`})
})





 module.exports = app;
