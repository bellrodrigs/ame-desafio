'user strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String
    },
    climate: {
        type: String
        },
    terrain: {
            type: String
        },
    movies_apparition: {
            type: String
        } 
            
});

module.exports = mongoose.model('Plannet', schema);