var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var data = fs.readFileSync('./todolist.json');

var app = express();

var list =JSON.parse(data) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.get("/list-api/", function(req, res) {
    res.json(list);
    
});


app.post("/list-api/", function(req, res) { 
    list.push(req.body);
    status='abc';
    res.json(list);
    var ab=JSON.stringify(list,null,2);
    fs.writeFile('todolist.json',ab,function(err)
    {
        // console.log(err);
    });
    
});


app.delete("/list-api/:item", function(req, res) {
    list = list.filter(function(a) {
        return a.item.toLowerCase() !== req.params.item.toLowerCase();
    });
    res.json(list);
    var ab=JSON.stringify(list,null,2);
    fs.writeFile('todolist.json',ab,function(err)
    {
        // console.log(err);
    });
});



app.post('/',function(req,res){
    // res.end(JSON.stringify(req.body));
    if(req.body.username=='z' && req.body.password=='z'){
    console.log('login');
    
    // res.sendFile('todo.html',{root:path.join(__dirname,'./public/innerpages')});
    res.redirect('/innerpages/todo.html');
    }
    else{
      console.log('fail');
      res.end(`fail`);
    
    }
});

app.get("/innerpages/todo.html", function(req, res) {
	res.json(list);
});


app.listen(3002);

console.log("Express app running on port 3002");

module.exports = app;