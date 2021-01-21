// var express = require('express');
// var router = express.Router();
var DoctorController = require('../controllers/DoctorControllers.js');

//On expose une fonction qui prend en parametre 
//le routeur sur lequel on cree ces routes 
module.exports = 

/**
 * 
 * @param {*} router router sur lequel on defini ces routes
 */
function(router){
/*
 * GET
 */
router.get('/Doctor', DoctorController.list);

/*
 * GET
 */
router.get('/Doctor/:id', DoctorController.show);

/*
 * POST
 */
router.post('/Doctor', DoctorController.create);

/*
 * PUT
 */
router.put('/Doctor/:id', DoctorController.update);

/*
 * DELETE
 */
router.delete('/Doctor:id', DoctorController.remove);

}


// module.exports = router;