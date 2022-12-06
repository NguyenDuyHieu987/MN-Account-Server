const userRouter = require('./bankaccount');

function route(app) {
  app.use('/account', userRouter);
  app.use('/user', userRouter);
}

module.exports = route;
