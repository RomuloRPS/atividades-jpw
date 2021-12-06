'use strict'
var mongoose = require('mongoose')
var usuario = mongoose.model('usuario')

// GET ALL
exports.lista_todos_os_usuarios = function(req, res) {
    let pageSize = parseInt(req.query['limit']) || 100
    let page = parseInt(req.query['offset']) || 0
    let query = {}

    usuario.find(query, {} ,{limit: pageSize, skip: page}, function(err, usuarios) {
        if(err) {
            res.status(400).send(err);
        }

        console.log(err);
        res.json(usuarios)
    })
}

// GET ID
exports.lista_um_usuarios = function(req, res) {
    usuario.findOne({"_id": req.params.usuarioId}, function(err, usuario) {
        if(err) {
            res.status(400).send(err);
        }
        res.json(usuario)
    })
}

// POST
exports.adiciona_um_usuario = function(req, res) {
    var novo_usuario = new usuario(req.body)
    console.log(req.body);
    novo_usuario.save(function(err, usuario) {
        console.log(err);
        if(err) {
            res.status(400).send(err);
        }
        res.json(usuario)
    })
}

// PUT
exports.atualiza_um_usuario = function(req, res) {
    usuario.findOneAndUpdate({_id: req.params.usuarioId}, req.body, {new: true}, 
        function(err, usuario) {
            if (err) {
                res.status(400).send(err);;
            }
            res.json(usuario);
        });
}

// DELETE
exports.remove_um_usuario = function(req, res) {
    usuario.remove({_id: req.params.usuarioId}, function(err, usuario) {
        if(err) {
            res.status(400).send(err);
        }
        res.json({"Mensagem": "Usuário deletado com sucesso"})
    })
}