const r = require('rethinkdb')

function connect() {
  return r.connect({host: 'rethink', port: 28015, db: 'test'}).then(
    connection => connection,
    error => console.log(error)
  )
}

function listen(connection) {
  return r.table('testTable').changes().run(connection).then(
    cursor => {
      cursor.each(function(err, row) {
        if (err) throw err;
        console.log(JSON.stringify(row, null, 2));
    });
    },
    error => console.log(error)
  )
}

connect().then(listen)