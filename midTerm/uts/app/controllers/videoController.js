const videoUseCase = require('../useCases/videoUseCase');

async function getAllVideos(req, res) {
  try {
    const videos = await videoUseCase.getAllVideos();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllVideos,
};