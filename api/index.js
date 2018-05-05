let express = require('express'),
    route = express();

route.post('/upload', function (req, res){
  console.log('uploading something');
  res.send(200);
});

route.get('/download/:name', function(req, res){
  console.log('download something');
  res.send(200);
})

module.exports = route;
