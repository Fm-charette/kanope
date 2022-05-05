const app = require('../../src/app');

describe('\'capteurs\' service', () => {
  it('registered the service', () => {
    const service = app.service('capteurs');
    expect(service).toBeTruthy();
  });
});
