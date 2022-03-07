const express = require('express'); 
const mongoose = require('mongoose');
const app = express(); 
const PORT = process.env.PORT || 5000; 

const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/auth', require('./routers/auth-rout'))
app.use('/work', require('./routers/work-rout'))

async function start() {
  try {
      await mongoose.connect('mongodb://localhost:27017/WebTest');
      app.listen(PORT, () => console.log(`Server has been started on port ${PORT}!`));
  }
  catch (e) {
      console.log(`Server Error: ${e.message}`);
      process.exit(1);
  }
}

start();