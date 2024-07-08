const mongoose = require('mongoose');

const barangaySchema = new mongoose.Schema({
    psgc: Number,
    name: String,
    geolevel: String,
    urbanrural: String,
    population2020: String,
    status: String,
    region: String,
    province: String,
    citymunicipality: String
});

const Barangay = mongoose.model('Barangay', barangaySchema);

module.exports = Barangay;