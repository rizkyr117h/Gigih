const Video = require('../models/video');

async function getAllVideos() {
  return Video.find({}, { _id: 0, videoID: 1, thumbnailURL: 1 });
}

module.exports = {
  getAllVideos,
};