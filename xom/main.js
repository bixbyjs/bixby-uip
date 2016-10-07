exports = module.exports = function(resolver) {
  var api = {};
  
  api.resolveServices = function(id, type, cb) {
    resolver.resolveServices(id, type, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/uip';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/uip/Resolver'
];
