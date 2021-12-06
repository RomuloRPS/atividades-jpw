'use strict'
var mongoose = require('mongoose')
var oficina = mongoose.model('oficina')

// GET ALL
exports.lista_todos_os_oficinas = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let query = {}

    oficina.find(query, {} ,{limit: pageSize, skip: page}, function(err, oficinas) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(oficinas)
    })
}

// GET ID
exports.lista_um_oficinas = function(req, res) {
    oficina.findOne({"_id": req.params.oficinaId}, function(err, oficina) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(oficina)
    })
}

// POST
exports.adiciona_um_oficina = function(req, res) {
    var novo_oficina = new oficina(req.body)
    novo_oficina.save(function(err, oficina) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(oficina)
    })
}

// PUT
exports.atualiza_um_oficina = function(req, res) {
    oficina.findOneAndUpdate({_id: req.params.oficinaId}, req.body, {new: true}, 
        function(err, oficina) {
            if (err) {
                res.status(400).send(err);
            }
            res.json(oficina);
        });
}

// DELETE
exports.remove_um_oficina = function(req, res) {
    oficina.remove({_id: req.params.oficinaId}, function(err, oficina) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "oficina deletada com sucesso"})
    })
}