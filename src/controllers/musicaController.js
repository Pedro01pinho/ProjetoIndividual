var musicaModel = require("../models/musicaModel")

function cadastrar(req, res) {
    var genero = req.body.generoServer;
    var album = req.body.albumServer;
    var musica = req.body.musicaServer;
    var id = req.body.idServer;

    if (genero == undefined) {
        res.status(400).send("Seu gênero preferido está definido como undefined!");
    } else if (album == undefined) {
        res.status(400).send("Seu album preferido está como undefined!");
    } else if (musica == undefined){
        res.status(400).send("Sua música preferida está como undefined!")
    } else {
        musicaModel.cadastrar(genero, album, musica, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar as respostas! Erro: ",
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

