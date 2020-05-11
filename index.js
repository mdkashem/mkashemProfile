var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/mips', (req, res) => res.render('pages/mips'))
  
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
