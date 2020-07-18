let server = require('express')()
let express = require('express')

server.use(express.static(__dirname + '/public'))

let http = require('http').Server(server)
let io = require('socket.io')(http)

server.get('/', (req, res) => res.sendfile('index.html'))

const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const port = new SerialPort('/dev/ttyACM0')
const parser = new Readline()

port.pipe(parser)
parser.on('data', data => io.emit('dadoArduino', { valor: data, }))

io.on('connection', socket => console.log('Um usuário está conectado!'))

http.listen(3000, function() {
    console.log('O servidor está em 3000')
})