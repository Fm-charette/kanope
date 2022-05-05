// Initializes the `relais` service on path `/relais`
const { Relais } = require('./relais.class');
const createModel = require('../../models/relais.model');
const hooks = require('./relais.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/relais', new Relais(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('relais');

  service.hooks(hooks);
};
