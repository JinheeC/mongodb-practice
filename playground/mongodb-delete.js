const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: '점심 먹기'
  // }).then((result) => {
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({
  //   text: '점심먹기'
  // }).then((result) => {
  //   console.log(result);
  // })


  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').deleteMany({name: '정진희'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bc6fd0ef314630ded453ddf')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  client.close();
});
