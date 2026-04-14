//chamado do express para criar o servidor
const express = require('express');

//criação do servidor
const server = express();

server.use(express.json());

//array com 5 jogos que eu joguei recentemente e, mais 5 que pretendo jogar em breve.
const jogos = ['Minecraft', 'Silksong', 'Super Mario Wonder','EA Sports FC 24', 'A Lenda do Herói', 'Mario Kart 8 Deluxe', 
'Hollow Knight', 'Forza Horizon 5', 'Minecraft Dungeons 2', 'The Legend of Zelda: Breath of the Wild'
]

// Retorna um jogo por index (Get por index)
server.get('/jogos/:index', (req, res) => {
    const {index} = req.params;
    if(index >= jogos.length) {
        return res.status(400).json({message: "Jogo não encontrado"});
    }
    return res.json(jogos[index]);
});

// Retorna todos os jogos da lista (Get lista)
server.get('/jogos', (req, res) => {
    return res.json(jogos);
});

// Criar um novo jogo (Port)
server.post('/jogos', (req, res) => {
    const {nome} = req.body;
    if(!nome) {
        return res.status(400).json({message: "Nome do jogo é obrigatório"});
    }
    jogos.push(nome);
    return res.json(jogos);
});

// Atualizar um jogo por index(Put)
server.put('/jogos/:index', (req, res) => {
    const {index} = req.params;
    const {nome} = req.body;
    if(index >= jogos.length) {
        return res.status(400).json({message: "Jogo não encontrado"});}
    if(!nome) {
        return res.status(400).json({message: "Nome do jogo é obrigatório"});}
    jogos[index] = nome;

    return res.json(jogos);
});

// Deleter um jogo(Delete)
server.delete('/jogos/:index', (req, res) => {
    const {index} = req.params;
    if(index >= jogos.length) {
        return res.status(400).json({message: "Jogo não encontrado"});
    }
    jogos.splice(index, 1);
    return res.json({message: "O jogo foi deletado"});
});

//Servidor local ouvindo na porta 3000
server.listen(3000);

//Vídeo usado como referência para a construção do código e manuseio do Insomnia: 
// https://www.youtube.com/watch?v=hgFQgtsYG30 créditos ao canal Danki Code.