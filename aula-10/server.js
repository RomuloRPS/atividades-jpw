var express = require('express');
var cors = require('cors')


app = express();
app.use(cors())
port = process.env.PORT || 8080;
mongoose = require('mongoose')

local = require('./api/models/localModel');
oficina = require('./api/models/oficinaModel');
usuario = require('./api/models/usuarioModel');

bodyParser = require('body-parser');
  
mongoose.connect('mongodb://localhost:27017/gssapiServiceName=mongodb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var ns_local = require('./api/routes/localRoutes');
var ns_oficina = require('./api/routes/oficinaRoutes');
var ns_usuario = require('./api/routes/usuarioRoutes');

ns_local(app);
ns_oficina(app);
ns_usuario(app);

app.use(function (req,res,next){
	res.status(404).json({"Error": "Page not founded"});
});

app.listen(port);