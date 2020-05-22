const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const restoSchema = mongoose.Schema({

    name: {type: String},
    email: {type: String},
    banerUrl: {type: String, require: true},
    password: {type: String},
    phone: {type: String, require: true},
    likes: {type: Number},
    menus: [
    	{
	    	name:{type: String},
	    	prix:{type: Number},
	    	ingredients: {type: String},
	    	categorie: {type: String}
    	}
    	],

    accompagnement: [ 
        {
            name:{type: String},
            prix: {type: Number}
        }
        
    ],
    ville: {type: String, require: true}
});


module.exports = mongoose.model('Resto', restoSchema);