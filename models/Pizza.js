const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
    //could also use "toppings: {type: Array}" instead.
});

// create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

//exporting the Pizza model
module.exports = Pizza;