// Récupération du fichier concernant les pubs
var pubs = require('../mocks/pubs.json');
// Récupération de la librairie moment.js
var moment = require('moment');
// Récupération de la librairie lodash
const _ = require("lodash");


// Fonction qui liste tous les pubs
function listAllPubs(){
    return pubs.map(function (pub){
        return pub.name;
    });
};

// Fonction qui liste les pubs ouvert en se basant sur les jours
// moments.js pour la manipulation de date
function listAllOpenPubsBasedOnDate(){
    // Par rapport à l'instant t
    var dayOfWeek = moment().format('dddd');
    return pubs
                .filter(function(pub) {
                    return pub.openDays.includes(dayOfWeek);
                })
                .map(function (pub) {
                    return pub.name;
                });

};

module.exports = {
    listAllPubs: listAllPubs,
    listAllOpenPubsBasedOnDate: listAllOpenPubsBasedOnDate
};