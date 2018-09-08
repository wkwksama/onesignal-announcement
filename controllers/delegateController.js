var _ = require('lodash')
var Delegate = require('../models/Delegate')

module.exports = {
  create: async function (req, res) {
    try {
      var delegates = await Delegate.create(req.body.delegates)
      res.send(delegates)
    }
    catch (err) {
      res.status(500).json({
        message: err.message,
        detail: err
      })
    }
  },
  find: async function (req, res) {
    try {
      let result = await Delegate.findOne({ userId: req.user.sub })

      res.json(result)
    } catch (err) {
      res.status(500).json(result)
    }
  }
}
