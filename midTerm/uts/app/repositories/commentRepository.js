const Comment = require('../models/comment');

async function getCommentsByVideoID(videoID) {
  return Comment.find({ videoID }, { _id: 0, username: 1, comment: 1, timestamp: 1 });
}

async function createComment(username, comment, videoID) {
  const newComment = new Comment({ username, comment, videoID });
  await newComment.save();
  return newComment;
}

module.exports = {
  getCommentsByVideoID,
  createComment,
};