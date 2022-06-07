
// const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const jwt = require('jsonwebtoken')


// require("dotenv").config();

const app = express();

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/index");
require('./app/routes/products.routes')(app);
require('./app/routes/transactions.routes')(app);
require('./app/routes/users.routes')(app);
require('./app/routes/cartitems.routes')(app);

// require('./app/routes/users.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});