require('dotenv').config('../.env')
const middleware=require('./middleware')
const router= require('../routes/index')
const {notFounderHandelar,errorHandelar}=require('./error')

const express =require('express')
const fileUpload =require('express-fileupload')




const app =express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

  app.use(fileUpload())
app.use(middleware)
app.use(router)




app.use(notFounderHandelar)


app.use(errorHandelar)


module.exports=app