const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../ui/views/'));

app.use(express.static(path.join(__dirname, '../ui/public')));

app.get('/', (request, response) =>  {
    
    const data = JSON.parse(fs.readFileSync(__dirname + '/data/data.json', 'utf8'));
    response.render('template/index', { data });
});

app.listen(8080);