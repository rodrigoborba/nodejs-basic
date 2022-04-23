var http = require('http')
var handle = require('./handle')
var nome = require('./name')

var events = require('events')
var emiter = new events.EventEmitter()

emiter.on('say12', say)

function say(){
    console.log('Im saying...')
}

emiter.emit('say12')

var server = http.createServer(handle)

console.log('console no app.js - nome ' + nome )
console.log('console no app.js - nome.name() ' + nome.name() )

server.listen(3000, function () {
    console.log('Server is listening at port 3000')
})


