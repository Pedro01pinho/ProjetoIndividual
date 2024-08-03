var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:id", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/genero/:id", function (req, res) {
    medidaController.buscarGeneroUsuario(req, res);
});

router.get("/genero", function (req, res) {
    medidaController.buscarGenero(req, res);
});

router.get("/listar/:id", function (req, res) {
    medidaController.listarPorUsuario(req, res);
});

router.get("/listar", function (req, res) {
    medidaController.listarUsuario(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;