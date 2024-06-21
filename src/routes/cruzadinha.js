var express = require("express");
var router = express.Router();

var cruzadinhaController = require ("../controllers/cruzadinhaController")

router.post("/cadastrar", function (req, res) {
    cruzadinhaController.cadastrar(req, res);
})

module.exports = router