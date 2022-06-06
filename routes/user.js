const express =require('express')
const controller=require('../controllers/user')
const router=express.Router()

router.get('/',controller.getAllUsers)
router.get('/:email/:password',controller.getUserByPasswordMail)
router.post('/',controller.postUser)
router.put('/:id',controller.putUser)
router.delete('/:id',controller.deleteUser)
router.get('/order/get/:id',controller.getOrders)

module.exports=router;