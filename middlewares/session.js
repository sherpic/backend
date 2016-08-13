const redis = require('connect-redis');
const session = require('express-session');

module.exports = function(options) {
  options = {
    url: process.env.REDIS_URL
  };
  const RedisStore = redis(session);
  return session({
    store: new RedisStore(options),
    secret: process.env.AUTH0_SECRET
  });
};