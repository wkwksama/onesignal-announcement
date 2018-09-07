var fs = require('fs')
var axios = require('axios')
var Announcement = require('../models/Announcement')

module.exports = {
  create: async function (req, res) {
    var images
    if (req.files) {
      images = req.files.map(file => {
        return file.filename
      })
    }
    try {
      var announcement = await Announcement.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        images: images,
        links: req.body.links,
        author: req.user.name,
        scope: req.body.scope
      })
      res.json(announcement)
    }
    catch (err) {
      if (images) {
        images.forEach(image => {
          fs.unlink(`public/uploads/${image}`)
        })
      }
      res.status(500).json({
        message: err.message
      })
    }
  },
  all: async function (req, res) {
    try {
      var annc = await Announcement.find({}).sort({ createdAt: -1 })
      res.json(annc)
    } catch (err) {
      res.status(500).json(err.message)
    }
  },
  detail: async function (req, res) {
    try {
      var annc = await Announcement.findById(req.params.id)
      res.json(annc)
    } catch (error) {
      res.status(500).json(err.message)
    }
  }
}
