const bcrypt = require('bcrypt')
const Restaurant = require('../models/Resto');


//  Creation d'un retaurant
exports.createResto = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        delete req.body._id;
        const restaurant = new Restaurant({
            ...req.body,
            password: hash,
        });
        restaurant.save()
        .then(() => res.status(201).json({message: "Un restaurant à été créé"}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(400).json({error}));
     
}
 
// Récupération de tt les restaurants
exports.getResto = (req, res, next) => {
    Restaurant.find()
    .then(restos => res.status(200).json(restos))
    .catch(error => res.status(400).json({error}));
}


// Récupération d'un seule restaurant

exports.getOneResto = (req, res, next) => {

    Restaurant.findOne({_id: req.params.id})
    .then(resto => res.status(200).json(resto))
    .catch(error => res.status(400).json({error}));
    
}


// Modification d'un restaurant

exports.modifyResto = (req, res, next) => {

    console.log("Vous etre entrain de modifier un restaurant")
    res.status(200).json({message: "Le restaurant à été modifié"})
    console.log(" Le restaurant à été modifié");
}
