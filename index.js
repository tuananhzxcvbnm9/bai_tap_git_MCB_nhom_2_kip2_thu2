const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('images'));

app.set('views', './views');
app.set('view engine','ejs');

app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/home', (req, res)=>{
    res.render('home');
});

app.get('/ngoc', (req, res)=>{
    res.render('profileNgoc');
});
app.get('/thuy', (req, res)=>{
    res.render('profileThuy');
});

app.get('/phong', (req, res)=>{
    res.render('profilePhong');
});

app.get('/tuanAnh', (req, res)=>{
    res.render('profileTuanAnh');
});

app.listen(2020, ()=>console.log("server is running 2020!"));