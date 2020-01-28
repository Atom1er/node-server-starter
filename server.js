const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;
//Server Setup//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));


// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/client/public/index.html"));
  });

app.listen(PORT, ()=>{
    console.log(`Nigga's Server started on port ${PORT}. Nigga can access his website via http://localhost:${PORT}`);
})