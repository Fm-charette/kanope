const app = require('../../src/app');

describe('\'relais\' service', () => {
  it('registered the service', () => {
    const service = app.service('relais');
    expect(service).toBeTruthy();
  });
});
