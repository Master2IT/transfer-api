const { Transfer } = require('../models/transfer.model.js');

exports.createOne = (req, res) => {
    for (const key in req.body) {
        if (Object.hasOwnProperty.call(req.body, key)) {
            if (!req.body[key]) {
                res.status(400).send({
                    message: 'All field are required!'
                });
                return
            }
        }
    }

    const app = new Transfer({
        account_holder: req.body.account_holder,
        iban: req.body.iban,
        amount: req.body.amount,
        date: req.body.date,
        note: req.body.note
    })

    app.save()
        .then(() => {
            res.send({
                success: true,
                message: 'Transfer create successfully.'
            })
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Error!'
            });
        });
};

exports.findOne = (req, res) => {
    Transfer.findOne({ _id: req.params.id }).then(data => {
        res.send({
            data,
            success: true
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error!'
        });
    })
}

exports.findAll = (req, res) => {
    Transfer.find().then(data => {
        res.send({
            data: data.reverse(),
            success: true
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error!'
        });
    })
}

exports.findByIdAndUpdate = (req, res) => {
    Transfer.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then(data => {
        res.send({
            data,
            success: true
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error!'
        });
    })
}

exports.findByIdAndRemove = (req, res) => {
    Transfer.findByIdAndRemove({_id: req.params.id}).then(data => {
        res.send({
            data,
            success: true
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Error!'
        });
    })
}