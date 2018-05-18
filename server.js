
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');
var reload = require('reload')
app.set('view engine', 'hbs');
var cpp;
var introtxt;
fs.readFile("./txt/intro.txt", 'utf8', function(err, data){
  if (err) throw err;
  introtxt = data.toString();
});
/*
fs.readFile("./txt/js/js.txt", 'utf8', function(err, data){
  if (err) throw err;
  jstxt = data.toString();
//  console.log(jstxt);
});
*/
// viewed at http://localhost:8080
app.use(express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));
app.get('/', function(req, res) {
  //  res.sendFile(path.join(__dirname + '/index.html'));
res.render('index', {
  title : "GamerJS",
  home : "Home",
  tutorials : "Tutorials",
  games : "Games",
  about : "About",
  intro : introtxt,
  name : "Develop  by Phillip Salazar"
  });
});

app.get('/tutorials', (req, res) =>{
  res.render('public/tutorials', {
    title : "GamerJS",
    home : "Home",
    tutorials : "Tutorials",
    games : "Games",
    about : "About",
    intro : introtxt,
    name : "Develop  by Phillip Salazar"
  });
});

app.get('/games', (req,res) => {
  res.render('public/games', {
    title : "GamerJS",
    home : "Home",
    tutorials : "Tutorials",
    games : "Games",
    about : "About",
    intro : introtxt,
    name : "Develop  by Phillip Salazar"
  });
});

app.get('/about', (req,res) => {
  res.render('public/about', {
    title : "GamerJS",
    home : "Home",
    tutorials : "Tutorials",
    games : "Games",
    about : "About",
    intro : introtxt,
    name : "Develop  by Phillip Salazar"
  });
});



app.listen(8000, function() {
  console.log("port 8000!!!");

});
