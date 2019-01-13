const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const init = ({ usernames = [] } = {}) => {
  const app = express();
  const users = new Set(usernames);

  app.use(cors({
    origin: 'http://localhost:3000',
  }));

  app.use(bodyParser.json());

  app.post('/sessions', (req, res) => {
    const { username } = req.body;

    if (users.has(username)) {
      return res.status(409).send('The username is already taken.');
    }

    users.add(username);

    res.sendStatus(201);
  });

  return app;
};

module.exports = { init };
