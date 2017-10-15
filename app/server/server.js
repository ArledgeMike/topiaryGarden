const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../ui/views/'));

app.use(express.static(__dirname + '../ui/public'));

app.get('/', (request, response)=>{
    response.render('template/index');
});

app.listen(8080);
