const express =require('express');
const userController = require('../controller/User.js');

const router= express.Router();

router.post('/create',userController.create)
router.get('/getalluserdata',userController.getalluserdata);
router.get('/gatonsuser/:id',userController.getoneuser);
router.put('/update/:id',userController.updateuser);
router.delete('/delete/:id',userController.userdelete);

module.exports=router;