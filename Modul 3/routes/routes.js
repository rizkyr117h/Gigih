const express = require("express");
const router = express.Router();
const Song = require("../models/song");



router.post('/post', (req,res) => {
    const song = new Song({
        title: "Umbrella",
        artist: "Beyonce",
        played: 10
    })

    
    try{
        const songToSave = song.save();
        res.status(200).json()
    }catch (err){
        res.status(400).json({
            message: err.message
        })
    }

})



exports.module = router;