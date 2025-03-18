import express from 'express'

const app = express()
const port =  3000;

app.get('/',(req,res)=>{
    res.send('<html><body><h1>Hej</h1><p>hej2</p></body></html>')
})

const players = [
    {id:1,jersey:21,name:"Foppa",teams:["Colorado","Modo"]},
    {id:2,jersey:2,name:"Anders Eldebrink",teams:[]},
    {id:3,jersey:13,name:"Sudden",teams:["Toronto"]}
]
 

app.get('/movies',(req,res)=>{
    res.json(players)
})


app.get('/contact',(req,res)=>{
    res.send('Dont contact us')
})
app.listen( port ,()=>{
    console.log('server is running at port number 3000')
});