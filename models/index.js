const mongoose = require('mongoose');
const { connectionURI } = require('../config');
mongoose
  .connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    autoReconnect: true,
    useUnifiedTopology: true,
    reconnectTries: Number.MAX_VALUE
  })
  .then(() => console.log(`MongoDB started`))
  .catch(err => console.log(`MONGODB CONNECTING ERROR | ${err}`));
mongoose.Promise = global.Promise;
