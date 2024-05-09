var express = require('express');
var app = express();
var server = require ('http').Server(app);
var io = require ('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res){
res.status(200).send("Hola Mundo");
});

io.on('connection', function(socket){
console.log('Alguien se ha conectado con socket');
socket.emit('messages',{
id :1,
texto: "Hola, soy Angel Hernandez Diaz",
autor: "Angel Hernandez Diaz"
});
});

server.listen(3002, function(){
    console.log("El servidor esta corriendo en http://localhost:3002");
})