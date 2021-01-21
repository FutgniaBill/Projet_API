var ConsultationModels = require('../models/ConsultationModels.js');

/**
 * ConsultationController.js
 *
 * @description :: Server-side logic for managing Consultations.
 */
module.exports = {

    /**
     * ConsultationController.list()
     */
    list: function (req, res) {
        ConsultationModels.find(function (err, Consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Consultations !',
                    error: err
                });
            }
            return res.json(Consultations);
        });
    },

    /**
     * ConsultationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ConsultationModels.findOne({_id: id}, function (err, Consultation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Consultation.',
                    error: err
                });
            }
            if (!Consultation) {
                return res.status(404).json({
                    message: 'No such Consultation'
                });
            }
            return res.json(Consultation);
        });
    },

    /**
     * ConsultationController.create()
     */
    create: function (req, res) {
        var Consultation = new ConsultationModels({
			jour : req.body.jour,
			horaire : req.body.horaire

        });

        Consultation.save(function (err, Consultation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Consultation',
                    error: err
                });
            }
            return res.status(201).json(Consultation) ;
        });
    },

    /**
     * ConsultationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ConsultationModels.findOne({_id: id}, function (err, Consultation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Consultation',
                    error: err
                });
            }
            if (!Consultation) {
                return res.status(404).json({
                    message: 'No such Consultation'
                });
            }

            Consultation.jour = req.body.jour? req.body.jour : Consultation.jour;
			Consultation.horaire = req.body.horaire ? req.body.horaire : Consultation.horaire;
			
            Consultation.save(function (err, Consultation) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Consultation.',
                        error: err
                    });
                }

                return res.json(Consultation);
            });
        });
    },

    /**
     * ConsultationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ConsultationModels.findByIdAndRemove(id, function (err, Consultation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Consultion.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
