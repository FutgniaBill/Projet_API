var DoctorModels = require('../models/DoctorModels.js');

/**
 * DoctorControllers.js
 *
 * @description :: Server-side logic for managing Doctors.
 */
module.exports = {

    /**
     * DoctorController.list()
     */
    list: function (req, res) {
        DoctorModels.find(function (err, Doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }
            return res.json(Doctors);
        });
    },

    /**
     *  DoctorController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        DoctorModels.findOne({_id: id}, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Doctor.',
                    error: err
                });
            }
            if (Doctor) {
                return res.status(404).json({
                    message: 'No such Doctor'
                });
            }
            return res.json(Doctor);
        });
    },

    /**
     *  DoctorController.create()
     */
    create: function (req, res) {
        var Doctor = new DoctorModels({
			name : req.body.name,
			specialite : req.body.specialite

        });

        Doctor.save(function (err,    Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating   Doctor',
                    error: err
                });
            }
            return res.status(201).json (Doctor)
        });
    },

    /**
     *  DoctorController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        DoctorModels.findOne({_id: id}, function (err, Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting    Doctor',
                    error: err
                });
            }
            if (    Doctor) {
                return res.status(404).json({
                    message: 'No such   Doctor'
                });
            }

            Doctor.name = req.body.name ? req.body.name : Doctor.name;
		    Doctor.specialite = req.body.specialite ? req.body.specialite : Doctor.specialite;
			
            Doctor.save(function (err,    Doctor) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating   Doctor.',
                        error: err
                    });
                }

                return res.json (Doctor);
            });
        });
    },

    /**
     *  DoctorController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        DoctorModels.findByIdAndRemove(id, function (err,  Doctor) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the   Doctor.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
