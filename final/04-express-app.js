const express=require('express')
const app=express()
const path =require('path')


app.use(express.static('./public'))

//if above ine is execute then we also comment sendfile index.html code
// and index html always in root 





// app.get('/',(req,res)=>{
//     console.log('server hit home page');
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    
// })

app.all('*',(req,res)=>{
     res.status(404).send('resourse is not found')
})
app.listen(5000,()=>{
    console.log('server listen 5000 posrt');
})