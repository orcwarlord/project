import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', async (req, res) => {
  try {
    const response = await fetch(
      `https://trefle.io/api/v1/plants/?token=zHMvcTIkbKjwQLy_SB1SuQZkjo0s7N-DsuRyvAvow3I`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// This is the new endpoint. Calls can be made to localhost:3000/api
// with a query parameter of endpoint. For example, to get a list of
// plants, you would make a call to localhost:3000/api?endpoint=plants

app.get('/api', async (req, res) => {
  try {
    const endpoint = req.query.endpoint;

    const response = await fetch(
      `https://trefle.io/api/v1/${endpoint}?token=zHMvcTIkbKjwQLy_SB1SuQZkjo0s7N-DsuRyvAvow3I`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
