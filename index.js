const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
var os = require('os');

function getWinUserName()
{
  return os.userInfo().username;
}

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.post('/', (req, res) => {
  console.log(req.body.user);
  if (getWinUserName() == req.body.user)
  {
    console.log('UserExist');
    res.render('submitting.ejs');
  }
  else{
    console.log('UserNotExist');
    res.render('notSubmitting.ejs');
  }
});
app.listen(3000, () => console.log('it works!'));