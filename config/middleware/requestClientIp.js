const requestIp = require('request-ip');

const requestClientIp = function(req, res, next) {
  const clientIp = requestIp.getClientIp(req);
  req.body.clientIp = clientIp; 
  next(); 
};

module.exports = requestClientIp; 