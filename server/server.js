var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
var port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("Started listening on port", port);
})