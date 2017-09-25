const r = require('rethinkdb')

let index = 0 
function connect() {
  return r.connect({ host: 'localhost', port: 28015, db: 'test' }).then(
    connection => connection,
    error => console.log(error)
  )
}

function insert(connection) {
  return r.table('testTable').insert({name: `Document Test ${index++}`}).run(connection).then(
    res => console.log('insert ->', res),
    error => console.log(error)
  )
}

connect().then(connection => {
  for(let i = 0; i < 5; i++) insert(connection)
})
