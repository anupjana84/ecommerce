

const router = require('express').Router();

const usersRoutes=require('./users')

// const healthRoute=require('./healthRoute')

router.use('/api/v1',usersRoutes);
// router.use('/',healthRoute);
// module.exports=router



router.get('/health',(_req,res)=>{
    res.status(200).json({message:'success'})
})




module.exports=router