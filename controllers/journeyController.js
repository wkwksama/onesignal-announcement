var axios = require('axios')
var Journey = require('../models/Journey')

module.exports = {
  create: async function (req, res) {
    try {
      var journey = await Journey.create({
        session: req.body.session,
        rate: req.body.rate,
        content: req.body.content,
        by: req.user.sub,
        byName: req.user.name,
        scope: req.body.scope
      })
      res.json(journey)
    }
    catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  },
  all: async function (req, res) {
    try {
      var journey = await Journey.find({by: req.user.sub}).sort({ createdAt: 1 })
      res.json(journey)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
}
