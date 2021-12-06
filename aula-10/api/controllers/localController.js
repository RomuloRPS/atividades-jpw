'use strict'
var mongoose = require('mongoose')
var local = mongoose.model('local')

// GET ALL
exports.lista_todos_os_locais = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let query = {}
    console.log(query)
    local.find(query, {} ,{limit: pageSize, skip: page}, function(err, locais) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(locais)
    })
}

// GET ID
exports.lista_um_locais = function(req, res) {
    local.findOne({"_id": req.params.localId}, function(err, local) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(local)
    })
}

// POST
exports.adiciona_um_local = function(req, res) {
    var novo_local = new local(req.body)
    novo_local.save(function(err, local) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(local)
    })
}

// PUT
exports.atualiza_um_local = function(req, res) {
    local.findOneAndUpdate({_id: req.params.localId}, req.body, {new: true}, 
        function(err, local) {
            if (err) {
                res.status(400).send(err);;
            }
            res.json(local);
        });
}

// DELETE
exports.remove_um_local = function(req, res) {
    local.remove({_id: req.params.localId}, function(err, local) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "Locsal deletado com sucesso"})
    })
}