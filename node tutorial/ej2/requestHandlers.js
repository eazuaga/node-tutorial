var exec = require("child_process").exec;

function iniciar(response) {
  console.log("Manipulador de petición 'iniciar' fue llamado.");

  exec("find /",
    { timeout: 10000, maxBuffer: 20000*1024 },
    function (error, stdout, stderr) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(stdout);
      response.end();
    });
}

function subir(response) {
  console.log("Manipulador de petición 'subir' fue llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}
function casco(response) {
    console.log("Manipulador de petición 'casco' fue llamado.");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Hola casco");
    response.end();
}

exports.iniciar = iniciar;
exports.casco = casco;
exports.subir = subir;