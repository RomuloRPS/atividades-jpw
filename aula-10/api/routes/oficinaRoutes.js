'use strict'
module.exports = function(app) {
    var oficinaController = require('../controllers/oficinaController')

    app.route('/oficina')
        .get(oficinaController.lista_todos_os_oficinas)
        .post(oficinaController.adiciona_um_oficina)
    
    app.route('/oficina/:oficinaId')
        .get(oficinaController.lista_um_oficinas)
        .put(oficinaController.atualiza_um_oficina)
        .delete(oficinaController.remove_um_oficina)

}