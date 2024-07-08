const express = require('express');
const Citymunicipality = require('../models/citymunicipality');
const Barangay = require('../models/barangay');

const router = express.Router();

router.get('/citymunicipality', async (req, res) => {
    try {
        const citymunicipalitys = await Barangay.distinct('citymunicipality');
        res.json(citymunicipalitys);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/barangays', async (req, res) => {
    try {
        const { citymunicipality, search } = req.query;
        let query = {};
        if (citymunicipality) query.citymunicipality = citymunicipality;
        if (search) query.citymunicipality = { $regex: search, $options: 'i' };

        const barangays = await Barangay.find(query);

        res.json(barangays);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/province', async (req, res) => {
    try {
        const provinces = await Citymunicipality.distinct('province');
        res.json(provinces);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/lgus', async (req, res) => {
    try {
        const { province, search } = req.query;
        let query = {};
        if (province) query.province = province;
        if (search) query.lgu = { $regex: search, $options: 'i' };

        const lgus = await Citymunicipality.find(query);

        res.json(lgus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;