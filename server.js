const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const PORT = 8000;
io.listen(PORT);
console.log('listening on port ', PORT);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mysql = require('mysql');
const connection = mysql.createConnection({
host: 'localhost',
user:'root',
password: process.env.NODE_ENV,//password of your mysql db
database:'user_db'
});

connection.connect(function(err){
(err)? console.log(err+'+++++++++++++++//////////'): console.log('connection********');
});

require('./routes/html-routes')(app, connection);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
