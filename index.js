const express = require('express');
const hbs = require('hbs');
const app = express();
app.use(express.json());
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'))

const objects= {
    name: 'Maha',
    age: '22',
    city: 'karachi',
    err: 'Jaa ve'
}
app.get('',(req, res)=>{
    res.render('index.hbs',{myName: objects.city})
})
app.get('/ftch/user',(req, resp)=>{
    resp.send(objects)
})
app.get('*', (req,res)=>{
    res.render("404",
    {
        error: objects.err
    })
    })


app.listen("8080", () =>{
    console.log('Server is running on port 8080');
})  