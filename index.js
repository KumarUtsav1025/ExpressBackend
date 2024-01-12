const express = require('express');
const cors = require('cors');
const { db } = require('./mongoDB');
const router = require('./routes/message');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/message', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})