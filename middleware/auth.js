var jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if (req.headers.authorization) {
    var token = req.headers.authorization
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) {
        res.status(403).json({
          message: 'Failed to authenticate token',
          detail: err
        })
      }
      else {
        req.user = decoded
        next()
      }
    })
  }
  else {
    res.status(403).json({
      message: 'No token provided'
    })
  }
}
