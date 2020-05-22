const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./routes/user');
const restoRoute = require('./routes/resto');

// const User = require('./models/User');

// COnnexion  à mongo db Atlas
const mongoose = require('mongoose');
// Atlas mongodb+srv://Arnaud_Mink:mmeaddmongo@cluster0-8atc8.mongodb.net/test?retryWrites=true&w=majority
//  Localhost: mongodb://localhost:27017/FoodIS
mongoose.connect('mongodb+srv://Arnaud_Mink:mmeaddmongo@cluster0-8atc8.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/auth', userRoute);

app.use('/api/restaurant', restoRoute)


module.exports = app;