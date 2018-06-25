var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

require('./server/config/mongoose.js')

require('./server/config/routes_config.js')(app);

app.use(express.static( __dirname + '/public/dist/public' ));
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });



app.listen(8000, function(){
    console.log("listening on port 8000")
})