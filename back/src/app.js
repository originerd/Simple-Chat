const bodyParser = require('body-parser');
const express = require('express');

const init = () => {
  const app = express();
  const usernames = new Set();

  app.use(bodyParser.json());

  app.post('/sessions', (req, res) => {
    usernames.add(req.body.usernames);

    res.sendStatus(201);
  });

  return app;
};

module.exports = { init };
