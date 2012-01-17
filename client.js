var thrift = require('thrift');

var UserStorage = require('./gen-nodejs/UserStorage.js'),
    ttypes = require('./gen-nodejs/user_types');

var connection = thrift.createConnection('localhost', 9090),
    client = thrift.createClient(UserStorage, connection);

var user = new ttypes.UserProfile({uid: 1,
                                   name: "Mark 李",
                                   blurb: "I'll find something to put here."});

connection.on('error', function(err) {
  console.error(err);
});

client.store(user, function(err, response) {
  if (err) {
    console.error(err);
  } else {
    console.log("client stored:", user.uid);
    client.retrieve(user.uid, function(err, responseUser) {
      if (err) {
        console.error(err);
      } else {
        console.log("client retrieved:", responseUser.uid);
        connection.end();
      }
    });
  }
});

