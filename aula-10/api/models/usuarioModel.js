'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var usuarioSchema = Schema({
    nome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('usuario', usuarioSchema)