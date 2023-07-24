const productUseCase = require('../useCases/productUseCase');

async function getProductsByVideoID(req, res) {
  const { videoID } = req.params;
  try {
    const products = await productUseCase.getProductsByVideoID(videoID);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getProductsByVideoID,
};