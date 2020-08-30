const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.API_SERVER_NODE_ENV,
  port: process.env.API_SERVER_PORT,
  logs: process.env.API_SERVER_NODE_ENV === 'production' ? 'combined' : 'dev',
};
