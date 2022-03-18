const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//Initialize the app
const app = express();

//Middlewares

//Form Data Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
//Json Body Middlewares
app.use(bodyParser.json());
//Cors Middlewares
app.use(cors());
//Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

//Bring in the database config
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello World</h1>");
// });

//Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})