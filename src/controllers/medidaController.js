var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {


    var id = req.params.id;


    medidaModel.buscarUltimasMedidas(id).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
    /*função do gráfico de músicas cadastradas pelo usuário logado*/
    function buscarGeneroUsuario(req, res){

        var id = req.params.id;

        medidaModel.buscarGeneroUsuario(id).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado)
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    /*função do gráfico de músicas cadastradas pelo site*/
    function buscarGenero(req, res){


        medidaModel.buscarGenero().then(function (resultado) {
             if (resultado.length > 0) {
                 res.status(200).json(resultado);
             } else {
                 res.status(204).send("Nenhum resultado encontrado!");
             }
         }).catch(function (erro) {
             console.log(erro);
             console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
             res.status(500).json(erro.sqlMessage);
         });
    }
    /*função do ranking de músicas favoritas do usuário*/
    function listarPorUsuario(req, res) {
        var id = req.params.id;
    
        medidaModel.listarPorUsuario(id)
            .then(
                function (resultado) {
                    if (resultado.length > 0) {
                        res.status(200).json(resultado);
                    } else {
                        res.status(204).send("Nenhum resultado encontrado!");
                    }
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "Houve um erro ao buscar os avisos: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
   /*controller: função do ranking */ 
    function listarUsuario(req, res){


        medidaModel.listarUsuario().then(function (resultado) {
             if (resultado.length > 0) {
                 res.status(200).json(resultado);
             } else {
                 res.status(204).send("Nenhum resultado encontrado!");
             }
         }).catch(function (erro) {
             console.log(erro);
             console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
             res.status(500).json(erro.sqlMessage);
         });
    }

function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarGeneroUsuario,
    buscarGenero,
    listarPorUsuario,
    listarUsuario

}