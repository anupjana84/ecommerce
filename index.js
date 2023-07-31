require('dotenv').config()
const http =require('http')
const app =require('./app/app')
const dbConnect =require('./config/db')

dbConnect()


const server =http.createServer(app)
const PORT=process.env.PORT|| 8000

app.listen(PORT,()=>{
    console.log(`Server listen ${PORT}`)
})
// app.listen()