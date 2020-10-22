//1- CREATION DES DEPENDANCES DE MODULES
//MODUE DE JS.NODE
// const https = require('https');
const fs = require("fs");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const mysqlApostrophe = require("mysql-apostrophe");
//Module permettant de faire des refresh en SPA
// const history = require('connect-history-api-fallback');

//IMPORT DES MODULES CREES
var dataBase = require("./database");


//ATTENTION SEMBLE POSER PROBLEME A NODE EN LOCAL
// app.use(history());
app.use(cors());

//3- MISE EN PLACE DU BODY PARSER QUI PERMET DE LIRE LES JSON ET URL ENVOYE PAR LE FORMULAIRE
// ATTENTION : A METTRE OBLIGATOIREMENT SINON PAS D'AFFICHAGE ET MESSAGE D'ERREUR
app.use(bodyParser.json()); // LIRE LES BODY ENCODES EN JSON
app.use(
  bodyParser.urlencoded({
    // LIRE LES BODY ENCODES EN URL
    extended: true,
  })
);

//4- MISE EN PLACE DE mysqlApostrophe
app.use(mysqlApostrophe); //PERMET D'INSERER DES CHAMPS CONTENANT DES APOSTROPHES

//5- RECUPERATION DES FICHIERS ROUTES DANS LE DOSSIER ROUTES
const lecture = require("./routes/read");

//6- UTILISATION DES ROUTES

app.use("/read", lecture);

//------------------------------------------//
//  Lignes qui servent pour le déploiement  //
//------------------------------------------//
// 1°) Créer une contante qui reçoit le module path
const path = require('path'); 
// 2°) Préciser que Express va chercher des infos dans le dossiers build
app.use(express.static(path.join(__dirname, '/build')));
// app.use(express.static("public"));
// 3°) Préciser que Express va chercher des app en utilisant le préfixe "/""
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//------------------------------------------//
//    Fin des lignes pour le déploiement    //
//------------------------------------------//

//2- CHOIX DU PORT UTILISE PAR LE SERVEUR
const port = process.env.PORT || 3050; //RECUPERE UN PORT LIBRE SINON 3000
app.listen(port, function () {
  console.log("Ok ça marche");
  console.log("Le serveur utilise le port : " + port);
});