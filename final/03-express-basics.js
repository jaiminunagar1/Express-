// const express= require('express')
// const app =express()

//upper thing we can also write like that

const app = require('express')()
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.post
// app.listen

app.get('/',(req,res)=>{
    console.log('user hit the res');
    res.status(200).send('home page')
})

app.get('/about/',(req,res)=>{
   console.log('user hit the about page');
   res.status(200).send('About page')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>page is not found</h1>')
})
app.listen(5000,()=>{
    console.log('srever listen 5000');
})