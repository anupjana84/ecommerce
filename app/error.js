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

module.exports={
    notFounderHandelar,
    errorHandelar
}