const users = require('./users/users.service.js');
const capteurs = require('./capteurs/capteurs.service.js');
const relais = require('./relais/relais.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(capteurs);
  app.configure(relais);
};
