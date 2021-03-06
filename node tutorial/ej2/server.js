var http = require("http");
var url = require("url");

function iniciar(route, handle) {

    this.onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Peticion para " + pathname + " recibida.");

        route(handle, pathname, response);
    }

  http.createServer(this.onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;