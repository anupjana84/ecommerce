const notFounderHandelar=(_req,_res,next)=>{
    const error=new Error('Resource Not Found')
    error.status=400
    next(error)

}
const errorHandelar=(error,_req,res,_next)=>{
    if(error.status){
        res.status(error.status).json({
            message:error.message
        })
    }
    res.status(500).json({message:'Somthing went wrong'})
}
const error=(msg = 'Something Went Wrong', status = 500) =>{
	const e = new Error(msg);
	e.status = status;
	return e;
}


module.exports={
    notFounderHandelar,
    errorHandelar,
    error
}