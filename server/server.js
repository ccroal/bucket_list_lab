const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const parser = require('body-parser');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucketList');
    const listCollection = db.collection('list')
    const listRouter = createRouter(listCollection)
    app.use('/api/bucketList', listRouter);
  })
  .catch(console.err);

  const publicPath = path.join(__dirname, '../client/public');
  app.use(express.static(publicPath));

  app.use(parser.json());

  app.listen(3000, function() {
    console.log(`Listing on port ${this.address().port}`);
  })
