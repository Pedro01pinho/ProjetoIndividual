
CREATE DATABASE aquatech;
drop database aquatech;
USE aquatech;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
 create table musica (
 idMusica int primary key auto_increment,
 nome varchar(30),
 Album varchar(30),
 genero varchar(10),
 fkUsuario int,
 foreign key (fkUsuario) references usuario(id) );
 alter table musica
 add constraint chkGenero
 check (genero in('Rap','funk','samba','pagode'));
 
 create table usuario_musica (
 fkMusica int,
 fkUsuario int,
 foreign key (fkMusica) references musica(idMusica),
 foreign key (fkUsuario) references usuario(id));

create table cruzadinha (
idCruzadinha int primary key auto_increment,
qtdTentativas int,
fkUsuario int,
foreign key (fkUsuario) references usuario(id));
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(500),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into aquario (descricao) values ('Aquário de Estrela-do-mar');
select * from aquario;
select * from usuario;

INSERT INTO musica (nome, Album, genero) VALUES
('Rap da Felicidade', 'Sambas enredo', 'samba'),
('Tá Escrito', 'Samba Meu', 'samba'),
('Cheia de Manias', 'Cheia de Manias', 'pagode'),
('Livre Pra Voar', 'Só pra Contrariar', 'pagode'),
('Rap das Armas', 'Tropa de Elite', 'funk'),
('Deixa o Menino Jogar', 'MC Cidinho e Doca', 'funk'),
('Rap é Compromisso', 'Rap é Compromisso', 'rap'),
('Sou Mais Eu', 'Cidade do Povo', 'rap');

select * from musica;

select * from usuario;
select * from cruzadinha;
insert into usuario values
(default, 'Marcelo', 'marcelo.freschi@gmail.com',123456);
insert into usuario values
(default, 'Elerson', 'elerson.sabara@gmail.com',123456);
select c.idCruzadinha , c.qtdTentativas , u.nome from cruzadinha c join usuario u on c.fkusuario = u.id where u.id = 1; 

select count(m.genero), m.genero, u.nome from musica m join usuario u on m.fkUsuario = u.id where u.id = 1;

SELECT COUNT(m.genero) AS quantidade_generos, m.genero, u.nome  
FROM musica m 
JOIN usuario u ON m.fkUsuario = u.id 
WHERE u.id = 1 
GROUP BY m.genero, u.nome;

SELECT COUNT(m.genero) AS quantidade_generos, m.genero, u.nome  
FROM musica m 
JOIN usuario u ON m.fkUsuario = u.id 
GROUP BY m.genero, u.nome;
