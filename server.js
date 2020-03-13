const express = require('express');
const bodyParser = require('body-parser');
const todayDate = require(__dirname+'/dateController.ejs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


const items = [];
const itemsStudy = [];

app.get('/', (req, res)=>{
    let day = todayDate.getCurrentDate();

    res.render('index', {
        listTitle: day,
        newListItems: items
    })
});

app.post('/', (req, res)=>{
    console.log(req.body.list);
    let item = req.body.newItem;
    if(req.body.list === "Study TODO"){
        itemsStudy.push(item);
        res.redirect('/study');
    } else {
        items.push(item);
        res.redirect('/');
    }

    
});

app.get('/study', (req, res) => {
    res.render('index', {
        listTitle: "Study TODO",
        newListItems: itemsStudy
    })
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");    
})