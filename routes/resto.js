const express = require('express');
const  router = express.Router();
const restoCtrl = require('../controllers/resto')


 
router.get('/', restoCtrl.getResto);  // Récupération de tous les restaurants

router.get('/:id', restoCtrl.getOneResto); // Récuperation d'un restaurant
// router.put('/:id', restoCtl.modifyResto)  modification d'un resto
router.post('/', restoCtrl.createResto) //  Post pour creer un restaurant

module.exports = router;