const express = require('express');

const serve = express();

Server.use(express.json());

const cursos = ['Full stack', 'Desenvolvimento de games', 'viver de youtube'];

//retorna um curso
server.get('/curso/:index', (req, res) => {
    const { index } = req.params
    return res.json(curso[index]);
});
//retornar todos os cursos
server.get('/cursos', (req, res) => {
    return resp.json(cursos)
});
//criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});
//atualizar curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    cursos[index] = name;

    return res.json(cursos);
});
//deletar cursos
server.delete('/cursos/:index', (req, res) => {

    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({
        message: "Deletado com sucesso"
    });
});



Server.listen(3010);