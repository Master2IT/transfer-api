module.exports = (app) => {
    const apps = require('../controllers/transfer.controller.js');

    app.get('/transfer', apps.findAll);
    app.get('/transfer/:id', apps.findOne);
    app.post('/transfer', apps.createOne);
    app.put('/transfer/:id', apps.findByIdAndUpdate);
    app.delete('/transfer/:id', apps.findByIdAndRemove);

}