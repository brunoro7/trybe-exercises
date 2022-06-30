DROP DATABASE IF EXISTS cep_lookup;

CREATE DATABASE cep_lookup;

USE cep_lookup;

CREATE TABLE ceps(
  cep VARCHAR(8) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

/** para cadastrar o cep é necessario ter no max 8 digitos; */
INSERT INTO ceps ( cep, logradouro, bairro, localidade, uf) 
VALUES
  (11001000, 'Praça da Sé', 'Sé', 'São Paulo', 'SP');