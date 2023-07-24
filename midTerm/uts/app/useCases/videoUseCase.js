const videoRepository = require('../repositories/videoRepository');

async function getAllVideos() {
  return videoRepository.getAllVideos();
}

module.exports = {
  getAllVideos,
};