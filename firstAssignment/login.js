var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// app.get('/',function(req,res){
//   res.sendFile('index.html',{root:path.join(__dirname,'/public')});
// });

app.use(express.static("./public"));

app.post('/',function(req,res){
// res.end(JSON.stringify(req.body));
if(req.body.username=='z' && req.body.password=='z'){
console.log('login');

// res.sendFile('todo.html',{root:path.join(__dirname,'./public/innerpages')});
res.redirect('./public/innerpages/todo.html');
}
else{
  console.log('fail');
  res.end(`fail`);

}
});

app.listen(3000,function()
{
  console.log('Listening to port 3000');
});