var _ = require('lodash')
var Classroom = require('../models/Classroom')

module.exports = {
  create: async function (req, res) {
    try {
      let myClass = await Classroom.findOne({ by: req.user.sub })
      if (myClass) {
        throw { message: 'kamu sudah memilih kelas' }
      }

      let countClass = await Classroom.countDocuments({ className: req.body.className })
      if (countClass > 23) {
        throw { message: 'kuota kelas penuh', count: countClass }
      }

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
        message: err.message,
        detail: err
      })
    }
  },
  find: async function (req, res) {
    try {
      let designThinking = Classroom.countDocuments({ className: 'Design Thinking' })
      let virtualCollaboration = Classroom.countDocuments({ className: 'Virtual Collaboration' })
      let personalBranding = Classroom.countDocuments({ className: 'Personal Branding' })
      let peopleManagement = Classroom.countDocuments({ className: 'People Management' })
      let digitalMarketing = Classroom.countDocuments({ className: 'Digital Marketing' })
      let emotionalIntelligence = Classroom.countDocuments({ className: 'Emotional Intelligence' })
      let culturalIntelligence = Classroom.countDocuments({ className: 'Cultural Intelligence' })
      let judgement = Classroom.countDocuments({ className: 'Judgement and Decision Making' })
      let financial = Classroom.countDocuments({ className: 'Financial Planning' })
      let negotiation = Classroom.countDocuments({ className: 'Negotiation' })
      let myClass = Classroom.findOne({ by: req.user.sub })

      let results = await Promise.all([
        designThinking,
        virtualCollaboration,
        personalBranding,
        peopleManagement,
        digitalMarketing,
        emotionalIntelligence,
        culturalIntelligence,
        judgement,
        financial,
        negotiation,
        myClass
      ])

      let result = _.zipObject([
        'designThinking',
        'virtualCollaboration',
        'personalBranding',
        'peopleManagement',
        'digitalMarketing',
        'emotionalIntelligence',
        'culturalIntelligence',
        'judgement',
        'financial',
        'negotiation',
        'myClass',
      ], results)

      res.json(result)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }
}
