// var express = require('express');
// var router = express.Router();
var ConsultationControllers = require('../controllers/ConsultationControllers.js');

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
router.get('/Consultation', ConsultationControllers.list);

/*
 * GET
 */
router.get('/Consultation/:id', ConsultationControllers.show);

/*
 * POST
 */
router.post('/Consultation', ConsultationControllers.create);

/*
 * PUT
 */
router.put('/Consultation/:id', ConsultationControllers.update);

/*
 * DELETE
 */
router.delete('/Consultation:id', ConsultationControllers.remove);

}


// module.exports = router;
