var cruzadinhaModel = require("../models/cruzadinhaModel")

function cadastrar(req, res) {
    var tentativas = req.body.tentativaServer;
    var id = req.body.idServer;

    if  (tentativas == undefined){
        res.status(400).send("Tentativa está dando undefined")
    } else {
        cruzadinhaModel.cadastrar(tentativas, id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar a resposta! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
 cadastrar
}