const express = require('express');
const {createMenuObject} = require('../helpers/createMenuObject');

const home = (req, res) => {
    res.render('pages/page',{
        menu:createMenuObject('all'),
        banner: {
            title:'Todos os Animais',
            background : 'allanimals.jpg'
        }
    })
}

const dogs = (req, res) => {
    res.render('pages/page',{
        menu:createMenuObject('dog'),
        banner: {
            title:'Cachorros',
            background : 'banner_dog.jpg'
        }
    })
}

const cats = (req, res) => {
    res.render('pages/page',{
        menu:createMenuObject('cat'),
        banner: {
            title:'Todos os Animais',
            background : 'banner_cat.jpg'
        }
    })
}

const fishes = (req, res) => {
    res.render('pages/page',{
        menu:createMenuObject('fish'),
        banner: {
            title:'Todos os Animais',
            background : 'banner_fish.jpg'
        }
    })
}

module.exports.home = home;
module.exports.dogs = dogs;
module.exports.cats = cats;
module.exports.fishes = fishes;