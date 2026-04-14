const express = require('express');

const server = express();

server.use(express.json());

const jogos = ['Minecraft', 'Silksong', 'Super Mario Wonder']

// Retorna um jogo por index
server.get('/jogos/:index', (req, res) => {
    const {index} = req.params;
    return res.json(jogos[index]);
});

// Retorna todos os jogos da lista
server.get('/jogos', (req, res) => {
    return res.json(jogos);
});

// Criar um novo jogo
server.post('/jogos', (req, res) => {
    const {nome} = req.body;
    jogos.push(nome);
    return res.json(jogos);
});

// Atualizar um jogo por index
server.put('/jogos/:index', (req, res) => {
    const {index} = req.params;
    const {nome} = req.body;
    jogos[index] = nome;

    return res.json(jogos);
});

// Deleter um jogo
server.delete('/jogos/:index', (req, res) => {
    const {index} = req.params;
    jogos.splice(index, 1);
    return res.json({message: "O jogo foi deletado"});
});






server.listen(3000);