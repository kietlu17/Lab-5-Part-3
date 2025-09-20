const session = require('express-session');
const MongoStore = require('connect-mongo');


module.exports = session({
  secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: "sessions",
      }),
      cookie: {
          httpOnly: true,
          secure: false, // Set to true if using HTTPS
          maxAge: 1000 * 60 * 60,
      }, 
});
