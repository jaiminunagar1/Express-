const express =require('express')
const app = express() 

const {products}=require('./data')

app.get('/',(req,res)=>{
    // res.json(products)
res.send('<h1>Home page</h1> <a href="/api/products">Products</a>')
})
app.get('/api/products/',(req,res)=>{
    // res.json(products)
    const newproducts=products.map((product)=>{
        const {id,name,image}=product
        return{id,name,image}
    })
    res.json(newproducts)
})

// app.get('/api/products/1',(req,res)=>{
//     console.log(req);
//     console.log(req.params);
//     const singleproduct =products.find((product)=>{product.id===1})
//     res.json(singleproduct)
// })


app.get('/api/products/:productId',(req,res)=>{
    // console.log(req);
    // console.log(req.params);
    const {productId}=req.params
    const singleProduct=products.find((product)=>product.id === Number(productId))
    if(!singleProduct){
         return res.status(404).send('product not exist')
    }
    // console.log(singleProduct);
     return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
  })

  app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query)
    const {search,limit}=req.query
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)})
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({ sucess: true, data: [] })
      }
         return res.status(200).json(sortedProducts)
      
  })








app.listen(5000,()=>{
    console.log(('server listen port 5000...'));
})