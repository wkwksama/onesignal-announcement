var Classroom = require('../models/Classroom')

module.exports = {
  create: async function (req, res) {
    try {
      var classroom = await Classroom.create({
        className: req.body.className,
        by: req.user.sub,
        byName: req.user.name,
        scope: req.body.scope
      })
      res.json(classroom)
    }
    catch (err) {
      res.status(500).json({
        message: err.message
      })
    }
  },
  find: async function (req, res) {
    try {
      var classroom = await Classroom.findOne({ by: req.user.sub })
      res.json(classroom)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
}
