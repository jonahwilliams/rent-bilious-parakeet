'use strict';
let fs = require('fs');
let express = require('express');
let app = express();

const e = require('./engine');

/*
  Load rent data into memory and convert to dates
*/
let rents = JSON.parse(fs.readFileSync('./rent.json'))
  .map((d) => {
    d.start = e.make(d.start);
    d.end = e.make(d.end);
    return d;
  });


app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/rent/:date/:rent', (req, res) => {
  let rent = +req.params.rent;
  let date = e.make(req.params.date);

  res.json({
    max: e.maxRent(date, rent, rents)
  });
  res.end();
});


app.listen(8080, () => console.log(`listening on port 8080`));
