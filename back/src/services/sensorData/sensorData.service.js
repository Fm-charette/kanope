// Initializes the `data` service on path `/data`
const { Data } = require('./sensorData.class');
const createModel = require('../../models/sensorData.model');
const hooks = require('./sensorData.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };
  // Initialize our service with any options it requires
  app.use('/data', new Data(options, app));

  app.post('/callback',(req, res) =>  {
    let result = req.body;
    let hardwareId = '';
    let macAdress = '';
    let signalRssi = '';
    hardwareId = result.imei;
    let sensorData = '';
    let hexaTodeci = [];
    for (let i in result.devices) {
      if (result.devices.hasOwnProperty(i)){
         macAdress = i;
        signalRssi = result.devices[i].rssi;
        sensorData = result.devices[i].data
        const parsedDataArray = sensorData.slice(sensorData.length - 16, sensorData.length).match(/.{1,2}/g).reverse().join('').match(/.{1,4}/g).reverse();
        parsedDataArray.forEach((element ,index) => {
          if (index != 3){
            hexaTodeci.push((parseInt(element, 16)/100));
          } else {
            hexaTodeci.push((parseInt(element, 16)));
          }
        });
        const sensor = new Data(options);
        sensor.imei = hardwareId;
        sensor.adresse = macAdress;
        sensor.signal = signalRssi;
        sensor.dataSensor = hexaTodeci;
        app.service('/data').create(sensor);
        hexaTodeci = []; 
      }
    }
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('data');

  service.hooks(hooks);
};
