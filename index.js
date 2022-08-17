const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')



//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Top Billionaires';
  var heading = 'My Favourites';
  res.render('pages/index',{
    'title':title,
    'heading':heading
  });
})

app.get('/soccer', (req, res) => {
  var title = 'My Favorite Soccer Players';
  var heading = 'My Favourites';
  res.render('pages/soccer',{
    'title':title,
    'heading': heading
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
