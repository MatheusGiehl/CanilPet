const express = require('express');
const { pet } = require('../models/pet')
const { createMenuObject } = require('../helpers/createMenuObject');

const search = (req, res) => {
    let query = req.query.q;
    if(!query) {
        res.redirect('/');
        return;
    }
    let list = pet.getFromName(query);
    res.render('pages/page', {
        list,
        query
    });
}

module.exports.search = search;