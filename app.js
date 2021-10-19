const express = require('express');
const app = express();
const socket = require('socket.io');
const cors = require('cors')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors());
    next();
});

app.get('/', function (req, res) {
    res.send('Bem vindo!')
});

const server = app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
});

io = socket(server, { cors: { origin: "*" } });

io.on('connect', (socket) => {
    //console.log(socket.id);

    socket.on("sala_conectada", (dados) => {
        //console.log("Sala conectada" + dados);
        socket.join(dados);
    });

    socket.on("enviar_mensagem", (dados) => {
        //console.log(dados);
        socket.to(dados.sala).emit("mensagem_dados", dados.conteudo);
       //console.log(dados.conteudo);
    });

});

