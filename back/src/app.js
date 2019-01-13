const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const init = (options = { usernames: [] }) => {
  const app = express();
  const usernames = new Set(options.usernames);

  app.use(cors({
    origin: 'http://localhost:3000',
  }));

  app.use(bodyParser.json());

  app.post('/sessions', (req, res) => {
    const { username } = req.body;

    if (usernames.has(username)) {
      return res.status(409).send('The username is already taken.');
    }

    usernames.add(username);

    res.sendStatus(201);
  });

  return { app, usernames };
};

module.exports = { init };
