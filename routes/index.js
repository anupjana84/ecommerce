

const router = require('express').Router();

const usersRoutes=require('./users')
const authrouter = require('./auth')

// const healthRoute=require('./healthRoute')

router.use('/api/v1',usersRoutes);
router.use('/api/v1',authrouter);
// router.use('/',healthRoute);
// module.exports=router



router.get('/health',(_req,res)=>{
    res.status(200).json({message:'success'})
})




module.exports=router