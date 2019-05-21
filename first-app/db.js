//for mongodb version 3.0 and up
let MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
    if (err) throw err;
    console.log('HII');
    let db = client.db('animals');
    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
    });
});

module.exports = MongoClient; 