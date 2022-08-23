const express = require('express')
const app = express()
const port = 3000
var data = require('./data/test.json');
app.set('view engine', 'ejs')


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Top Billionaires';
  var heading = 'My Favourites';
  res.render('pages/index',{
    'title':title,
    'heading':heading,
  });
})

app.get('/about', (req, res) => {
  var title = 'My About Page';
  var heading = 'My Favourites';
  res.render('pages/about',{
    'title':title,
    'heading':heading
  });
})

app.get('/contact', (req, res) => {
  var title = 'My Contact Page';
  var heading = 'My Favourites';
  res.render('pages/contact',{
    'title':title,
    'heading':heading
  });
})

app.get('/users', (req, res) => {
  var title = 'My Users Page';
  var heading = 'My Favourites';
  res.render('users/index',{
    'title':title,
    'heading': heading,
    'users':data 
  });
})

app.get('/soccer', (req, res) => {
  var title = 'My Favorite Actors';
  var heading = 'My Favourites';
  res.render('pages/soccer',{
    'title':title,
    'heading':heading
  });
})

app.get('/singer', (req, res) => {
  var title = 'My Favorite Singers';
  var heading = 'My Favourites';
  res.render('pages/singer',{
    'title':title,
    'heading': heading
  });
})

app.get('/actor', (req, res) => {
  var title = 'My Favorite Actors';
  var heading = 'My Favourites';
  res.render('pages/actor',{
    'title':title,
    'heading': heading
  });
})

//add user/view route - we are cheating by using the array index - 1
app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 var heading = 'My Favourites';
 res.render('users/view', {
     title: title,
     'heading': heading,
     user: data[--id]
 });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
})
