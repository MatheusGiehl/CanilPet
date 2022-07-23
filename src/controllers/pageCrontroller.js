const express = require('express');

const home = (req, res) => {
    res.render('pages/page')
}

const dogs = (req, res) => {
    res.render('pages/page')
}

const cats = (req, res) => {
    res.render('pages/page')
}

const fishes = (req, res) => {
    res.render('pages/page')
}

module.exports.home = home;
module.exports.dogs = dogs;
module.exports.cats = cats;
module.exports.fishes = fishes;