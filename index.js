const express = require("express");
const path = require("path");

const exphbs = require('express-handlebars');
const logger = require("./middleware/logger");
const members = require('./members');
const app = express();

//Init middleware
//app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


//Homepage Route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

//Members API Routes
app.use('api/members/', require('./routes/api/members'))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
