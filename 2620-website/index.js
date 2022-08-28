const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/', require('./routes/survey'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server start for port: " + PORT))