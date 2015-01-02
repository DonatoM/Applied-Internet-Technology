var express = require('express');
var app = express();
var express_handlebars = require('express3-handlebars');

//  Use Main as the default template
app.engine('handlebars',express_handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.get('/',function(req,res){
  //  Calls Index File
  res.render('index',{pre: req.headers});
 });
app.get('/about', function(req,res){
  //  Calls About File
  res.render("about");}
  );
app.get('*', function(req,res){
  //  Calls 404
  res.render("404");
 });


app.use('/views/',express.static('views'));
var port = 3000;
app.listen(port);