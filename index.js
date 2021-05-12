const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const clientRouter = require('./routes/client');


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.use('/v1/clients', clientRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

