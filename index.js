const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const name = 'Ludmila';

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.get('/welcome', (req, res) => {
    res.json({'message': `thanks, ${name}`});
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

