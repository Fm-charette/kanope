const { Capteurs } = require('./capteurs.class');
const createModel = require('../../models/capteurs.model');
const hooks = require('./capteurs.hooks');
let result = {};

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/capteurs', new Capteurs(options, app));
  app.post('/callback', (req, res) =>  {
    result = req.body;
    relais = result.imei;
    console.log("Relais :", relais);
    for (let i in result.devices) {
      if (result.devices.hasOwnProperty(i)){
        rssi = result.devices[i].rssi;
        console.log("Signal :", rssi);
        console.log("-----");
        mac = i;
        console.log("Mac", i);
        console.log("-----");
        data = result.devices[i].data
        console.log("data", data);
        console.log("-----");
        const parsedDataArray = data.slice(data.length - 16, data.length).match(/.{1,2}/g).reverse().join('').match(/.{1,4}/g).reverse();
        console.log("Result :", parsedDataArray);
        parsedDataArray.forEach(element => {
          const hexaTodeci = (parseInt(element, 16)/100).toFixed(2);
          console.log("Res ", hexaTodeci);
        });
        const numb1 = (parseInt(parsedDataArray, 16)/100).toFixed(2);
      }
    }
  })

  // Get our initialized service so that we can register hooks
  const service = app.service('capteurs');

  service.hooks(hooks);
};
