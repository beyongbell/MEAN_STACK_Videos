const express    = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api  = require('./server/routers/api')
const port = 3000;
const app  = express();

app.use(express.static(path.join(__dirname, 'dist/Videos')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', api)

app.get('*', (req, res)=> {
    console.log(path.join(__dirname, 'dist/Videos/index.html'))
    res.sendFile(path.join(__dirname, 'dist/Videos/index.html'))
})

app.listen(port, function() {
    console.log("Server running on localhost:"+ port)
})
