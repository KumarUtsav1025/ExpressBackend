const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://Admin:DS1qIALdF6Wu7Ks3@cluster0.wzmslcg.mongodb.net/portfolioMessage?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Could not connect')
});

module.exports = mongoose;
