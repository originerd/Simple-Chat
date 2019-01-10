const bodyParser = require('body-parser');
const express = require('express');

const init = ({ usernames = [] } = {}) => {
  const app = express();
  const users = new Set(usernames);

  app.use(bodyParser.json());

  app.post('/sessions', (req, res) => {
    const { username } = req.body;

    if (users.has(username)) {
      return res.status(409).send('The username is already taken.');
    }

    users.add(req.body.usernames);

    res.sendStatus(201);
  });

  return app;
};

module.exports = { init };
