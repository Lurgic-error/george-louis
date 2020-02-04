const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

// Configure static files to be used by the server.
app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res){
    /**
     * Capture all routes and reroute them to the index.html file.
     */
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port);

console.log("Maelekezo...")