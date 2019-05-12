var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var file = require('./todolist.json');

var count=file.length;



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
// app.get('/',function(req,res){
//   res.sendFile('index.html',{root:path.join(__dirname,'/public')});
// });

app.get("/list-api", function(req, res) {
	res.json(list);
});

app.post("/list-api", function(req, res) {
     list.push(req.body);
     res.json(list);
    var ab=JSON.stringify(list,null,2);
    fs.writeFile('todolist.json',ab,function(err)
    {
        // console.log(err);
    });
    
});

app.delete("/list-api/:country", function(req, res) {
    list = list.filter(function(item) {
        return item.country.toLowerCase() !== req.params.country.toLowerCase();
    });
    res.json(list);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;