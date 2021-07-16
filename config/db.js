const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL');

// const db =
//   "mongodb+srv://nnguyen6:Lgad310126@devmeetup.blums.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    //exit porcess with failure
    process.exit(1);
  }
};

module.exports = connectDB;
