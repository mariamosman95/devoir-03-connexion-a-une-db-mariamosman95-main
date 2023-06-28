const mongoose = require('mongoose');


// Tortues
const TortueSchema = mongoose.Schema({
    nom: { type: String, required: true },
    nomLatin: { type: String, required: true },
    espece: { type: String, required: true },
    vitesse: { type: Number, required: true },
    habitat: { type: String },
    alimentation: { type: Array},
    ageMax: { type: Number },
    photoURL: {type: String},
});

module.exports = mongoose.model('Tortues', TortueSchema)
