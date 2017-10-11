const util = require('gulp-util');

const production = util.env.production || util.env.prod || false;
const destPath = 'build';

const config = {
  env: 'development',
  production,

  src: {
    root: 'src'
  },
  dest: {
    root: destPath
  },

  setEnv(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv() {
    util.log(
      'Environment:',
      util.colors.white.bgRed(` ${process.env.NODE_ENV} `)
    );
  },

  errorHandler: require('./utils/handle-errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
