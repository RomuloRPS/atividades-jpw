'use strict'
module.exports = function(app) {
    var usuarioController = require('../controllers/usuarioController')

    app.route('/usuario')
        .get(usuarioController.lista_todos_os_usuarios)
        .post(usuarioController.adiciona_um_usuario)
    
    app.route('/usuario/:usuarioId')
        .get(usuarioController.lista_um_usuarios)
        .put(usuarioController.atualiza_um_usuario)
        .delete(usuarioController.remove_um_usuario)

}