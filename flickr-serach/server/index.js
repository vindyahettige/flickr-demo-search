const express = require('express')
const app = express();

const flickrController = require('./controllers/flickr-controller')

const port = 3000;

app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    next();
  
  });

app.get('/flickr', flickrController.get_public_feed);

app.listen(port , () => {
    console.log('Server is running on port ' + port)
})

