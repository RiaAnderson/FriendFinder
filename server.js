const express = require('express');
const app = express();

var PORT = process.env.PORT || 8080;
 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});