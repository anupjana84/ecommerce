
require('dotenv').config('.env')
const mongoose=require('mongoose')
const port='mongodb+srv://amimadhu93:tSf5FyCJtoaJSbNQ@cluster0.woynbcy.mongodb.net/'
 const dbConnect=()=>{
    mongoose.connect(port,{
        useNewUrlParser:true, 
        useUnifiedTopology:true
    }).then(console.log('Db Connect'))
    .catch((err)=>{

        console.log('Db connection Issue')
        console.log(err)
        process.exit(1)

    })
}
module.exports=dbConnect