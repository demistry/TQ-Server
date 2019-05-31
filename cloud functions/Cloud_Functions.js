var admin = require('firebase-admin')


var serviceAccount = require(process.env);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://davidemi-project.firebaseio.com"
});