module.exports = require(process.env.NODE_ENV === 'production'
  ? './webpack.config.prod'
  : './webpack.config.dev');
