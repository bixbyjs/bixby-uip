exports = module.exports = function(resolver) {
  var api = {};
  
  api.resolveServices = function(id, type, cb) {
    resolver.resolveServices(id, type, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/uis';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/uis/Resolver'
];
