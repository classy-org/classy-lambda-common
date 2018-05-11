'use strict';
require('regenerator-runtime/runtime');
require('source-map-support').install();

const _ = require('lodash');
const Config = require('../Config');

class AWSConfig extends Config {
  constructor() {
    super([
      require('../DataSources/Environment'),
      require('../DataSources/Credstash'),
      require('../DataSources/Clients'),
      require('../DataSources/Logging'),
      require('../DataSources/Replacer')
    ]);
  }
}

module.exports = AWSConfig;
