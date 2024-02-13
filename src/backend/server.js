const express = require('express')
const app = express()
const port = 8081
const path = require('path')

const userRoute = require('./routes/user')
const mysqlConnector = require('./database/mysql')
const viewsDir = path.join(__dirname, '../frontend/pages');

app.use(express.static(path.join(__dirname, '../frontend/assets')))
app.set('views', viewsDir)
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users', userRoute)

app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>")
})

app.listen(port, function(){
    console.log('Your app running on port '+ port)
})
