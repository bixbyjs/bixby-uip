/*
exports = module.exports = {
  '': require('./xom/main')
};
*/

exports = module.exports = function(id) {
  try {
    return require('./xom/' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
