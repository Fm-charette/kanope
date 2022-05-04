const mongoose = require('mongoose');

module.exports = function (app) {
  mongoose.connect("mongodb://127.0.0.1:27017/kanope", 
  (err) => {
    if (!err) {
      console.log("MongoDb connected");
    } else {
      console.log("Connection error: " + err);
    }
  });
  app.set('mongooseClient', mongoose);
};