const { Capteurs } = require('./capteurs.class');
const createModel = require('../../models/capteurs.model');
const hooks = require('./capteurs.hooks');
let result = {};

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
  };
  // Initialize our service with any options it requires
  app.use('/capteurs', new Capteurs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('capteurs');

  service.hooks(hooks);
};
