'use strict'
module.exports = function(app) {
    var localController = require('../controllers/localController')

    app.route('/local')
        .get(localController.lista_todos_os_locais)
        .post(localController.adiciona_um_local)
    
    app.route('/local/:localId')
        .get(localController.lista_um_locais)
        .put(localController.atualiza_um_local)
        .delete(localController.remove_um_local)

}