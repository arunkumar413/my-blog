const express = require('express');
const app = express()
const port = 3000
const fs = require('fs');
const { marked } = require('marked');
const pug = require('pug');
const path = require('path');

app.disable('x-powered-by');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('css'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.get('/blog/:filename', function (req, res) {

  let fileName = req.params.filename;
  const markdown = `./blog/${fileName}.md`

  fs.readFile(markdown, 'utf8', function (err, data) {
    if (err) {
      res.send('Blog post not found')
    }

    else {
      let html = marked(data.toString());
      res.removeHeader('X-Robots-Tag');
      res.set('X-Robots-Tag', 'all');

      res.render('index',{postContent:html})
    }


  })


})

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})