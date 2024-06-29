var database = require("../database/config");

function buscarUltimasMedidas(id) {

    var instrucaoSql = `select c.idCruzadinha , c.qtdTentativas , u.nome from cruzadinha c join usuario u on c.fkusuario = u.id where u.id = ${id};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(id) {
    var instrucaoSql = `select m.nome, m.Album , m.genero from musica m join usuario u on m.fkUsuario = u.id where m.fkUsuario = ${id};`;

    console.log("executando a instrução SQL: \n" + instrucaoSql);
 return database.executar(instrucaoSql);
}

function buscarGeneroUsuario(id) {
 var instrucaoSql = `SELECT COUNT(m.genero) AS quantidade_generos, m.genero, u.nome  
FROM musica m 
JOIN usuario u ON m.fkUsuario = u.id 
WHERE u.id = ${id} 
GROUP BY m.genero, u.nome;`;

 console.log("executando a instrução SQL: \n" + instrucaoSql);
 return database.executar(instrucaoSql);
}

function buscarGenero() {
    var instrucaoSql = `SELECT COUNT(m.genero) AS qtd_generos, m.genero, u.nome  
   FROM musica m 
   JOIN usuario u ON m.fkUsuario = u.id  
   GROUP BY m.genero, u.nome;`;
   
    console.log("executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
   }

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarGeneroUsuario,
    buscarGenero,
    listarPorUsuario
}
