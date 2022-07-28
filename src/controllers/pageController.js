const express = require('express');
const {createMenuObject} = require('../helpers/createMenuObject');
const { pet } = require('../models/pet');

const home = (req, res) => {
    let list = pet.getAll();
    res.render('pages/page',{
        menu:createMenuObject('all'),
        banner: {
            title:'Todos os Animais',
            background : 'allanimals.jpg'
        },
        list
    })
}

const dogs = (req, res) => {
    let list = pet.getFromType('dog');
    res.render('pages/page',{
        menu:createMenuObject('dog'),
        banner: {
            title:'Cachorros',
            background : 'banner_dog.jpg'
        },
        list
    })
}

const cats = (req, res) => {
    let list = pet.getFromType('cat');
    res.render('pages/page',{
        menu:createMenuObject('cat'),
        banner: {
            title:'Gatos',
            background : 'banner_cat.jpg'
        },
        list
    })
}

const fishes = (req, res) => {
    let list = pet.getFromType('fish');
    res.render('pages/page',{
        menu:createMenuObject('fish'),
        banner: {
            title:'Peixes',
            background : 'banner_fish.jpg'
        },
        list
    })
}

module.exports.home = home;
module.exports.dogs = dogs;
module.exports.cats = cats;
module.exports.fishes = fishes;