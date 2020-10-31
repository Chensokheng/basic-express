const express = require('express');
const bodyParser = require('body-parser');
const api = require('./router/api');
const isAuth = require('./middleware/isAuth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./public'));

app.set('view engine', 'pug');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/dashboard', isAuth, (req, res) => {
  res.render('dashboad');
});

app.use('/api/todo', api);

app.listen(3000, () => {
  console.log('Server is running on port 30000');
});
