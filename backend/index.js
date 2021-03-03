// FileName: index.js



// Import express
let express = require('express'); // Initialize the app
var cors = require('cors') // Dentro de importaciones 

let app = express(); // Setup server port

app.use(cors()) // Dentro de ejecuciones

var port = process.env.PORT || 8081; // Send message for default URL

let bodyParser = require('body-parser'); // Import Body parser

let mongoose = require('mongoose'); // Import Mongoose


app.get('/', (req, res) => res.send('Hello World with Express')); // Launch app to listen to specified port

app.listen(port, function () {
console.log('Running RestHub on port ' + port);
});

// Import routes
let apiRoutes = require('./api-routes'); // Use api routes in the app

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded ({
    extended: true
}));

app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/contenedorDocker', {
    useNewUrlParser: true
});  

app.use('/api', apiRoutes);

var db = mongoose.connection;
