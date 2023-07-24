const productRepository = require('../repositories/productRepository');

async function getProductsByVideoID(videoID) {
  return productRepository.getProductsByVideoID(videoID);
}

module.exports = {
  getProductsByVideoID,
};