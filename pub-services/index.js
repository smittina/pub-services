// On mappe et on exporte tous les services que l'on souhaite
// mettre à disposition des modules
var pubService = require('./services/pub.services');

module.exports = {
    services:{
        pubService:pubService
    }
};
