'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var oficinaSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    professor: {
        type: String,
        required: true
    },
    local: {
        type: Number,
        required: true
    },
    participantes: [
        {
            type: Number,
            required: true
        },  
    ]
})

module.exports = mongoose.model('oficina', oficinaSchema)