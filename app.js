const express = require('express');
const bodyparser = require('body-parser');
const date = require(__dirname+"/date.js")

const app = express();
const items = ['Buy Food','Cook Food','Eat Food'];
const workItems =[]
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    
const day = date.getDate();
    
    res.render('index' , {listTitle:day ,newListItems:items });
})

app.get('/work',function(req,res){
    res.render('index' , {listTitle:"work List" ,newListItems:workItems });
})
app.get('/about',function(req,res){
    res.render('about')})

app.post('/',function(req,res){
  const item =req.body.newItem;
  if(req.body.list==='work'){
    console.log(req.body);
 
    workItems.push(item);
    res.redirect('/work')
  }else{
  items.push(item)
  res.redirect('/')
  }
   
})

app.listen(3000,function(){
    console.log("on port 3000");
})