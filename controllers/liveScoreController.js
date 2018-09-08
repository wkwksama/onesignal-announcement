var LiveScore = require('../models/LiveScore')

module.exports = {
  create: async function (req, res) {
    try {
      var liveScore = await LiveScore.create({
        mendikbud: req.body.mendikbud,
        pupr: req.body.pupr,
        pertanian: req.body.pertanian,
        bekraf: req.body.bekraf,
        tenagaKerja: req.body.tenagaKerja,
        kominfo: req.body.kominfo,
      })
      res.json(liveScore)
    }
    catch (err) {
      res.status(500).json({
        message: err.message,
        detail: err
      })
    }
  },
  all: async function (req, res) {
    try {
      var liveScore = await LiveScore.findOne().sort({ createdAt: -1 })
      res.json(liveScore)
    } catch (err) {
      res.status(500).json({
       message: err.message
      })
    }
  }
}
