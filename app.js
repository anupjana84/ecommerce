require('dotenv').config('.env')
const morgan = require("morgan");

const fileUpload =require('express-fileupload')

// const middleware=require('./middlewares')
const middleware =require('./middlewares/middleware')
const router=require('./routes')
 const {notFounderHandelar,errorHandelar}=require('./error')


const express =require('express')
const app =express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// app.use(fileUpload({
// 	limits: { fileSize: 50 * 1024 * 1024 },
//   }));

//   app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));
app.use(router)
app.use(morgan('tiny'))



app.use(middleware)

app.use((err, _req, res, _next) => {
	console.log(err);
	const message = err.message ? err.message : 'Server Error Occurred';
	const status = err.status ? err.status : 500;

	res.status(status).json({
		message,
	});
});


// app.use(notFounderHandelar)


// app.use(errorHandelar)


module.exports=app