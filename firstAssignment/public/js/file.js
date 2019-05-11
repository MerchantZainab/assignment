var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var data = fs.readFileSync('./countries.json');

var app = express();

var countries =JSON.parse(data) ;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.get("/countries-api", function(req, res) {
	res.json(countries);
});

app.post("/countries-api", function(req, res) {
     countries.push(req.body);
     res.json(countries);
    var ab=JSON.stringify(countries,null,2);
    fs.writeFile('countries.json',ab,function(err)
    {
        // console.log(err);
    });
    
});

app.delete("/countries-api/:country", function(req, res) {
    countries = countries.filter(function(item) {
        return item.country.toLowerCase() !== req.params.country.toLowerCase();
    });
    res.json(countries);
});

app.listen(3001);

console.log("Express app running on port 3000");

module.exports = app;