const express    = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const path = require('path')
const api  = require('./server/routers/api')
const port = 3000;
const app  = express();

app.use(express.static(path.join(__dirname, 'dist/Videos')))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
//     next();
// });

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use('/api', api)

app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'dist/Videos/index.html'))
})

app.listen(port, function() {
    console.log("Server running on localhost:"+ port)
})
