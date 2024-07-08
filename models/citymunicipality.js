const mongoose = require('mongoose');

const citymunicipalitySchema = new mongoose.Schema({
    lgu: String,
    class: String,
    capital: String,
    province: String,
    region: String,
    island: String,
    incomeclass: String,
    barangays: Number,
    population2020: String,
    povertyincidence: String,
    area: Number,
    populationdensity2020: Number,
    assets2022: String,
    liabilities2022: String,
    revenue2022: String,
    expenditures2022: String,
    salesman: Number,
    website: String,
    status: String,
    muncityhalladdress: String
});

const Citymunicipality = mongoose.model('Citymunicipality', citymunicipalitySchema);

module.exports = Citymunicipality;