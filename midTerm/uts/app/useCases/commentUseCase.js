const commentRepository = require('../repositories/commentRepository');

async function getCommentsByVideoID(videoID) {
  return commentRepository.getCommentsByVideoID(videoID);
}

async function createComment(username, comment, videoID) {
  return commentRepository.createComment(username, comment, videoID);
}

module.exports = {
  getCommentsByVideoID,
  createComment,
};