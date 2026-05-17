const { MongoClient } = require('mongodb');

const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri);

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        console.error("❌ Error conectando a Mongo:", err);
        return callback(err);
      }

      dbConnection = db.db('ejemplo');
      console.log('✅ Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};