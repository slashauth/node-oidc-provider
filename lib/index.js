const Debug = require('debug');

const Provider = require('./provider');
const errors = require('./helpers/errors');
const helpers = require('./helpers');
const interactionPolicy = require('./helpers/interaction_policy');

const debug = new Debug('oidc-provider:debug');

console.log('something');
debug('initializing');

module.exports = Provider;
module.exports.Provider = Provider;
module.exports.errors = errors;
module.exports.interactionPolicy = interactionPolicy;
module.exports.helpers = helpers;
