const mongoose = require('mongoose');

const TransferSchema = mongoose.Schema({
    account_holder: String,
    iban: String,
    amount: Number,
    date: String,
    note: String
});
module.exports.Transfer = mongoose.model('Transfer', TransferSchema);