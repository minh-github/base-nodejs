const express = require('express'); // Require module express vào project
const app = express(); // Tạo một app mới
const port = 8081; // Định nghĩa cổng để chạy ứng dụng NodeJS của bạn trên server
const path = require('path');

// Require user route
const userRoute = require('./routes/user')

const viewsDir = path.join(__dirname, '../frontend/pages');

app.use(express.static(path.join(__dirname, '../frontend/assets')))

app.set('views', viewsDir); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'ejs'); // Sử dụng pug làm view engine

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Dùng userRoute cho tất cả các route bắt đầu bằng '/users'
app.use('/users', userRoute);

app.get('/', function(req, res){
	res.send("<h2>This is my first app</h2>");
})


app.listen(port, function(){
    console.log('Your app running on port '+ port);
})
