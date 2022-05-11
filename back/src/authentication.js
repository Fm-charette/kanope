const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');

class MyLocalStrategy extends LocalStrategy {
  async findEntity(email, params) {
    try {
      const entity = await super.findEntity(email, params);
      
      return entity;
    } catch (error) {
      throw new Error('email not found');
    }
  }

  async comparePassword(entity, password) {
    try {
      const result = await super.comparePassword(entity, password);
      
      return result;
    } catch (error) {
      throw new Error('Invalid password');
    }
  }
}

module.exports = app => {
  const authService = new AuthenticationService(app);

  authService.register('local', new MyLocalStrategy());

  // ...
  app.use('/authentication', authService);
}