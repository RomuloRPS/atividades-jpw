'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var localSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    capacidade: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('local', localSchema)