const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const fs = require('fs')
const pg = require('pg');
const SQL = require('sql-template-strings');
const Client = pg.Client
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.get("/", (request, response) => {
    response.render("index", {});
    });

// request({
//     url: process.env.api
// })

const config = {
    user: process.env.POSTGRES_USER,
    database: 'bulletinboard',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432
};

const client = new Client(config)
client.connect()

//list all messages
app.get('/view', function(req, res) {
    console.log('HAllo')
    client.connect();
    client.query('select * from messages', (err, result) => {
        console.log(err ? err.stack : 'showing all messages')

        res.render('view', {
            messages: result.rows
        });
    });
});



app.post('/dropMessage', function(req, res) {
    var newTitle = req.body.title;
    var newBody = req.body.message;

    client.query(SQL`insert into messages (title, body) values (${newTitle}, ${newBody})`, (err, result) => {
        console.log(err ? err.stack : 'new message added to the database')
    });

    res.redirect('/view');
});


app.listen(3000, ()=>{
    console.log("Miracle happens on port 3000 =] ")
})

