const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const Video    = require('../models/video')

const db = "mongodb+srv://tinnakorn:Bellclubb5835791@cluster0-fzf5t.mongodb.net/videos_db?retryWrites=true&w=majority"

mongoose.connect(db, { useNewUrlParser: true },function(err) {
    err ? console.log(err) : console.log("Connected to MongoDB")
})

router.get('/videos' , function(req, res) {
    Video.find({}).exec(function(error, videos) {
        error ? res.send("Error All Video") : res.json(videos)
    })
})

router.get('/videos/:id' , function(req, res) {
    Video.findById(req.params.id).exec(function(error, videos) {
        error ? res.send("Error  Video") : res.json(videos)
    })
})

router.post('/video', function(req, res) {
    console.log("Post a Video")
    let newVideo = new Video();
    newVideo.title = req.body.title
    newVideo.url   = req.body.url
    newVideo.description = req.body.description

    newVideo.save(function(error, insertVideo) {
        error ? res.send("Error Save Video") : res.json(insertVideo)
    })
})

router.put('/video/:id', function(req, res) {
    Video.findByIdAndUpdate(req.params.id,
        {
            $set: {
                title: req.body.title,
                url  : req.body.url,
                description: req.body.description
            }
        },
        {
            new : true
        },
        function (error, updateVideo) {
            error ? res.send("Error Update Video") : res.json(updateVideo)
        }
    )
})

router.delete('/video/:id', function(req,res) {
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        err ? res.send("Error delete Video") : res.json(deletedVideo)
    })
})

module.exports = router