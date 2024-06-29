var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
})

router.post("/Projeto", function (req, res) {
    musicaController.cadastrarProjeto(req, res);
})

module.exports = router