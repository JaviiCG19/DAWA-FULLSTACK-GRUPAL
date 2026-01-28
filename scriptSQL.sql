-- Crear el esquema si no existe
CREATE SCHEMA IF NOT EXISTS dawa;

SET search_path TO dawa;

CREATE TABLE tb_user(
  user_id serial primary key,
  user_login varchar(20) not null,
  user_password varchar(100) not null,
  user_names varchar(100),
  user_surnames varchar(100),
  user_state boolean default true
);

INSERT INTO tb_user(user_login, user_password, user_names, user_surnames)
VALUES('admin','admin', 'usuario','administrador');

CREATE TABLE tb_provincias (
    codigo CHAR(2) PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE tb_cantones (
    codigo CHAR(4) PRIMARY KEY,
    codprov CHAR(2) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    -- Relación: Si se borra una provincia, se borran sus cantones (opcional)
    CONSTRAINT fk_provincia 
        FOREIGN KEY (codprov)
        REFERENCES tb_provincias(codigo)
        ON DELETE CASCADE
);


INSERT INTO tb_provincias (codigo, nombre) VALUES
('01', 'AZUAY'), ('02', 'BOLIVAR'), ('03', 'CAÑAR'), ('04', 'CARCHI'),
('05', 'COTOPAXI'), ('06', 'CHIMBORAZO'), ('07', 'EL ORO'), ('08', 'ESMERALDAS'),
('09', 'GUAYAS'), ('10', 'IMBABURA'), ('11', 'LOJA'), ('12', 'LOS RIOS'),
('13', 'MANABI'), ('14', 'MORONA SANTIAGO'), ('15', 'NAPO'), ('16', 'PASTAZA'),
('17', 'PICHINCHA'), ('18', 'TUNGURAHUA'), ('19', 'ZAMORA CHINCHIPE'), ('20', 'GALAPAGOS'),
('21', 'SUCUMBIOS'), ('22', 'ORELLANA'), ('23', 'SANTO DOMINGO DE LOS TSACHILAS'), ('24', 'SANTA ELENA');

-- Asegúrate de haber ejecutado los INSERT de las provincias antes de estos.

INSERT INTO tb_cantones (codigo, codprov, nombre) VALUES
-- AZUAY (01)
('0101', '01', 'CUENCA'), ('0102', '01', 'GUALACEO'), ('0103', '01', 'PAUTE'), ('0104', '01', 'SIGSIG'), ('0105', '01', 'SAN FERNANDO'), ('0106', '01', 'SANTA ISABEL'), ('0107', '01', 'PUCARA'), ('0108', '01', 'NABON'), ('0109', '01', 'OÑA'), ('0110', '01', 'CHORDELEG'), ('0111', '01', 'EL PAN'), ('0112', '01', 'SEVILLA DE ORO'), ('0113', '01', 'GUACHAPALA'), ('0114', '01', 'CAMILO PONCE ENRIQUEZ'), ('0115', '01', 'GIRON'),
-- BOLIVAR (02)
('0201', '02', 'GUARANDA'), ('0202', '02', 'CHILLANES'), ('0203', '02', 'CHIMBO'), ('0204', '02', 'ECHEANDIA'), ('0205', '02', 'SAN MIGUEL'), ('0206', '02', 'CALUMA'), ('0207', '02', 'LAS NAVES'),
-- CAÑAR (03)
('0301', '03', 'AZOGUES'), ('0302', '03', 'BIBLIAN'), ('0303', '03', 'CAÑAR'), ('0304', '03', 'LA TRONCAL'), ('0305', '03', 'EL TAMBO'), ('0306', '03', 'DELEG'), ('0307', '03', 'SUSCAL'),
-- CARCHI (04)
('0401', '04', 'TULCAN'), ('0402', '04', 'BOLIVAR'), ('0403', '04', 'ESPEJO'), ('0404', '04', 'MIRA'), ('0405', '04', 'MONTUFAR'), ('0406', '04', 'SAN PEDRO DE HUACA'),
-- COTOPAXI (05)
('0501', '05', 'LATACUNGA'), ('0502', '05', 'LA MANA'), ('0503', '05', 'PANGUA'), ('0504', '05', 'PUJILI'), ('0505', '05', 'SALCEDO'), ('0506', '05', 'SAQUISILI'), ('0507', '05', 'SIGCHOS'),
-- CHIMBORAZO (06)
('0601', '06', 'RIOBAMBA'), ('0602', '06', 'ALAUSI'), ('0603', '06', 'COLTA'), ('0604', '06', 'CHAMBO'), ('0605', '06', 'CHUNCHI'), ('0606', '06', 'GUAMOTE'), ('0607', '06', 'GUANO'), ('0608', '06', 'PALLATANGA'), ('0609', '06', 'PENIPE'), ('0610', '06', 'CUMANDA'),
-- EL ORO (07)
('0701', '07', 'MACHALA'), ('0702', '07', 'ARENILLAS'), ('0703', '07', 'ATAHUALPA'), ('0704', '07', 'BALSAS'), ('0705', '07', 'CHILLA'), ('0706', '07', 'EL GUABO'), ('0707', '07', 'HUAQUILLAS'), ('0708', '07', 'MARCABELI'), ('0709', '07', 'PASAJE'), ('0710', '07', 'PIÑAS'), ('0711', '07', 'PORTOVELO'), ('0712', '07', 'SANTA ROSA'), ('0713', '07', 'ZARUMA'), ('0714', '07', 'LAS LAJAS'),
-- ESMERALDAS (08)
('0801', '08', 'ESMERALDAS'), ('0802', '08', 'ELOY ALFARO'), ('0803', '08', 'MUISNE'), ('0804', '08', 'QUININDE'), ('0805', '08', 'SAN LORENZO'), ('0806', '08', 'ATACAMES'), ('0807', '08', 'RIOVERDE'), ('0808', '08', 'LA CONCORDIA'),
-- GUAYAS (09)
('0901', '09', 'GUAYAQUIL'), ('0902', '09', 'ALFREDO BAQUERIZO MORENO (JUJAN)'), ('0903', '09', 'BALAO'), ('0904', '09', 'BALZAR'), ('0905', '09', 'COLIMES'), ('0906', '09', 'DAULE'), ('0907', '09', 'DURAN'), ('0908', '09', 'EL EMPALME'), ('0909', '09', 'EL TRIUNFO'), ('0910', '09', 'MILAGRO'), ('0911', '09', 'NARANJAL'), ('0912', '09', 'NARANJITO'), ('0913', '09', 'PALESTINA'), ('0914', '09', 'PEDRO CARBO'), ('0916', '09', 'SAMBORONDON'), ('0918', '09', 'SANTA LUCIA'), ('0919', '09', 'SALITRE (URBINA JADO)'), ('0920', '09', 'SAN JACINTO DE YAGUACHI'), ('0921', '09', 'PLAYAS'), ('0922', '09', 'SIMON BOLIVAR'), ('0923', '09', 'CORONEL MARCELINO MARIDUEÑA'), ('0924', '09', 'LOMAS DE SARGENTILLO'), ('0925', '09', 'NOBOL'), ('0927', '09', 'GENERAL ANTONIO ELIZALDE'), ('0928', '09', 'ISIDRO AYORA'),
-- IMBABURA (10)
('1001', '10', 'IBARRA'), ('1002', '10', 'ANTONIO ANTE'), ('1003', '10', 'COTACACHI'), ('1004', '10', 'OTAVALO'), ('1005', '10', 'PIMAMPIRO'), ('1006', '10', 'SAN MIGUEL DE URCUQUI'),
-- LOJA (11)
('1101', '11', 'LOJA'), ('1102', '11', 'CALVAS'), ('1103', '11', 'CATAMAYO'), ('1104', '11', 'CELICA'), ('1105', '11', 'CHAGUARPAMBA'), ('1106', '11', 'ESPINDOLA'), ('1107', '11', 'GONZANAMA'), ('1108', '11', 'MACARA'), ('1109', '11', 'PALTAS'), ('1110', '11', 'PUYANGO'), ('1111', '11', 'SARAGURO'), ('1112', '11', 'SOZORANGA'), ('1113', '11', 'ZAPOTILLO'), ('1114', '11', 'PINDAL'), ('1115', '11', 'QUILANGA'), ('1116', '11', 'OLMEDO'),
-- LOS RIOS (12)
('1201', '12', 'BABAHOYO'), ('1202', '12', 'BABA'), ('1203', '12', 'MONTALVO'), ('1204', '12', 'PUEBLOVIEJO'), ('1205', '12', 'QUEVEDO'), ('1206', '12', 'URDANETA'), ('1207', '12', 'VENTANAS'), ('1208', '12', 'VINCES'), ('1209', '12', 'PALENQUE'), ('1210', '12', 'BUENA FE'), ('1211', '12', 'VALENCIA'), ('1212', '12', 'MOCACHE'), ('1213', '12', 'QUINSALOMA'),
-- MANABI (13)
('1301', '13', 'PORTOVIEJO'), ('1302', '13', '24 DE MAYO'), ('1303', '13', 'BOLIVAR'), ('1304', '13', 'CHONE'), ('1305', '13', 'EL CARMEN'), ('1306', '13', 'FLAVIO ALFARO'), ('1307', '13', 'JIPIJAPA'), ('1308', '13', 'JUNIN'), ('1309', '13', 'MANTA'), ('1310', '13', 'MONTECRISTI'), ('1311', '13', 'PAJAN'), ('1312', '13', 'PICHINCHA'), ('1313', '13', 'ROCAFUERTE'), ('1314', '13', 'SANTA ANA'), ('1315', '13', 'SUCRE'), ('1316', '13', 'TOSAGUA'), ('1317', '13', 'VENTANILLA'), ('1318', '13', 'PUERTO LOPEZ'), ('1319', '13', 'JAMA'), ('1320', '13', 'JARAMIJO'), ('1321', '13', 'SAN VICENTE'), ('1322', '13', 'OLMEDO'), ('1323', '13', 'PEDERNALES'),
-- MORONA SANTIAGO (14)
('1401', '14', 'MORONA'), ('1402', '14', 'GUALAQUIZA'), ('1403', '14', 'LIMON INDANZA'), ('1404', '14', 'PALORA'), ('1405', '14', 'SANTIAGO'), ('1406', '14', 'SUCUA'), ('1407', '14', 'HUAMBOYA'), ('1408', '14', 'SAN JUAN BOSCO'), ('1409', '14', 'TAISHA'), ('1410', '14', 'LOGROÑO'), ('1411', '14', 'PABLO SEXTO'), ('1412', '14', 'TIWINTZA'),
-- NAPO (15)
('1501', '15', 'TENA'), ('1503', '15', 'ARCHIDONA'), ('1504', '15', 'EL CHACO'), ('1507', '15', 'QUIJOS'), ('1509', '15', 'CARLOS JULIO AROSEMENA TOLA'),
-- PASTAZA (16)
('1601', '16', 'PASTAZA'), ('1602', '16', 'MERA'), ('1603', '16', 'SANTA CLARA'), ('1604', '16', 'ARAJUNO'),
-- PICHINCHA (17)
('1701', '17', 'QUITO'), ('1702', '17', 'CAYAMBE'), ('1703', '17', 'MEJIA'), ('1704', '17', 'PEDRO MONCAYO'), ('1705', '17', 'RUMIÑAHUI'), ('1707', '17', 'SAN MIGUEL DE LOS BANCOS'), ('1708', '17', 'PEDRO VICENTE MALDONADO'), ('1709', '17', 'PUERTO QUITO'),
-- TUNGURAHUA (18)
('1801', '18', 'AMBATO'), ('1802', '18', 'BAÑOS DE AGUA SANTA'), ('1803', '18', 'CEVALLOS'), ('1804', '18', 'MOCHA'), ('1805', '18', 'PATATE'), ('1806', '18', 'QUERO'), ('1807', '18', 'SAN PEDRO DE PELILEO'), ('1808', '18', 'SANTIAGO DE PILLARO'), ('1809', '18', 'TISALEO'),
-- ZAMORA CHINCHIPE (19)
('1901', '19', 'ZAMORA'), ('1902', '19', 'CHINCHIPE'), ('1903', '19', 'NANGARITZA'), ('1904', '19', 'YACUAMBI'), ('1905', '19', 'YANTZAZA (YANZATZA)'), ('1906', '19', 'EL PANGUI'), ('1907', '19', 'CENTINELA DEL CONDOR'), ('1908', '19', 'PALANDA'), ('1909', '19', 'PAQUISHA'),
-- GALAPAGOS (20)
('2001', '20', 'SAN CRISTOBAL'), ('2002', '20', 'ISABELA'), ('2003', '20', 'SANTA CRUZ'),
-- SUCUMBIOS (21)
('2101', '21', 'LAGO AGRIO'), ('2102', '21', 'GONZALO PIZARRO'), ('2103', '21', 'PUTUMAYO'), ('2104', '21', 'SHUSHUFINDI'), ('2105', '21', 'SUCUMBIOS'), ('2106', '21', 'CASCALES'), ('2107', '21', 'CUYABENO'),
-- ORELLANA (22)
('2201', '22', 'ORELLANA'), ('2202', '22', 'AGUARICO'), ('2203', '22', 'LA JOYA DE LOS SACHAS'), ('2204', '22', 'LORETO'),
-- SANTO DOMINGO DE LOS TSACHILAS (23)
('2301', '23', 'SANTO DOMINGO'), ('2302', '23', 'LA CONCORDIA'),
-- SANTA ELENA (24)
('2401', '24', 'SANTA ELENA'), ('2402', '24', 'LA LIBERTAD'), ('2403', '24', 'SALINAS');