CREATE DATABASE skere


CREATE TABLE Klant(
klant_id INT NOT NULL AUTO_INCREMENT,
klant_vnm VARCHAR(32) NOT NULL,
klant_anm VARCHAR(32) NOT NULL,
klant_tnvgsl VARCHAR(32) NOT NULL,
PRIMARY KEY(klant_id) )

CREATE TABLE Rekening(
rekening_nr INT NOT NULL,
rekening_type VARCHAR(32) NOT NULL DEFAULT 'Betaalrekening',
rekening_saldo INT NOT NULL,
rekening_begin INT(32) NOT NULL,
PRIMARY KEY(rekening_nr))

CREATE TABLE Klant_Rekening_Rel(
klant_id INT NOT NULL AUTO_INCREMENT,
rekening_nr INT NOT NULL,
relatie_id INT NOT NULL AUTO_INCREMENT)

CREATE TABLE Transacties(
Trans_id INT NOT NULL AUTO_INCREMENT,
Trans_Rekening_nr1 INT NOT NULL,
Trans_Rekening_nr2 INT NOT NULL,
Trans_tijd INT(32) NOT NULL,
Trans_bedrag INT NOT NULL,
PRIMARY KEY(Trans_id)
)