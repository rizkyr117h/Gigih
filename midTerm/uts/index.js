const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const videoRouter = require('./app/routes/videoRouter');
const productRouter = require('./app/routes/productRouter');
const commentRouter = require('./app/routes/commentRouter');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/videoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Terhubung dengan MongoDB');
})
.catch((error) => {
  console.error('Kesalahan dalam menghubungkan ke MongoDB:', error);
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/video', videoRouter);
app.use('/product', productRouter);
app.use('/comment', commentRouter);

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
