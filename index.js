var express = require('express');
var app = express();
var path = require('path');
// app.configure(function(){

//   // This route deals enables HTML5Mode by forwarding missing files to the index.html
// });

app.set('port', (process.env.PORT || 5000));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));

  app.all('/*', function(req, res) {
    res.sendfile('index.html');
  });
  
  app.all('/about-us.html', function(req, res) {
    res.sendfile('about-us.html');
  });  

  app.all('/become-a-gocibo-chef.html', function(req, res) {
    res.sendfile('become-a-gocibo-chef.html');
  });

  app.all('/careers.html', function(req, res) {
    res.sendfile('careers.html');
  });

  app.all('/privacy-policy.html', function(req, res) {
    res.sendfile('privacy-policy.html');
  });

  app.all('/quality-control.html', function(req, res) {
    res.sendfile('quality-control.html');
  });

  app.all('/terms-and-conditions.html', function(req, res) {
    res.sendfile('terms-and-conditions.html');
  });


app.listen(app.get('port'), function() {
});
