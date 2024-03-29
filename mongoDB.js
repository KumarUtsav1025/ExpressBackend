const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Could not connect')
});

module.exports = mongoose;
