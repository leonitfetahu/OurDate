const express = require("express");
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

let password = "LEONIT";
let username = "Riona Shkodra"


app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'index.html'));

})

app.post('/login',(req,res)=>{

    if(req.body.username === username && req.body.password === password){
        res.redirect('/quiz');

    }

    else{
        res.send("How did u get this wrong 🤣🤣🤣🤣");

    }

})

app.get('/quiz' , (req,res)=>{
    res.sendFile(path.join(__dirname,"quiz.html"));
})

app.listen(4000, () =>{
console.log('Server listening in port 4000');

})