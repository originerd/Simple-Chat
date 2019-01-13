const { init } = require('./src/app');

const app = init();
const port = 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
